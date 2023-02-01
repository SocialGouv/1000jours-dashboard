import React, { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from '@apollo/client';

import { useStyles } from "tss-react/dsfr";
import { LoggedState } from "../src/components/LoggedState";
import DatabaseApi from "../src/services/api/database";
import { Enum_Demandedecontact_Type_De_Contact, WidgetEpdsSources } from "../src/__generated__/graphql";
import { sortWidgetSourceByName } from "../src/utils/main.util";
import { Departement } from "../types/geogouv";

import { SelectDepartment } from "../src/components/SelectDepartment";
import { Input } from "@codegouvfr/react-dsfr/Input";
import Select from "@codegouvfr/react-dsfr/Select";
import Button from "@codegouvfr/react-dsfr/Button";
import Alert from "@codegouvfr/react-dsfr/Alert";


export default function AjoutDemande() {
  const { css } = useStyles();
  const widthFitContent = css({ width: "fit-content" })

  const { data: session, status } = useSession()
  const [isLogged, setLogged] = useState<Boolean>()

  const [widgetSources, setWidgetSources] = useState<WidgetEpdsSources[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState<Departement>()
  const [selectedContactOrigin, setSelectedContactOrigin] = useState<String>()
  const [selectedContactMode, setSelectedContactMode] = useState<String>()
  const [selectedContactSupport, setSelectedContactSupport] = useState<String>()

  useEffect(() => {
    console.log(isLogged)
  }, [isLogged])

  useEffect(() => {
    setLogged(status === "authenticated")
  }, [status])

  const { loading, data, error } = useQuery(
    DatabaseApi.GET_WIDGET_SOURCES
  );

  useEffect(() => {
    if (data) {
      setWidgetSources(sortWidgetSourceByName([...data.widgetEpdsSources]))
    }
  }, [data])

  const createNewContact = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    const target = event.target

    // Get data from the form.
    const data = {
      name: target.name.value,
      childNumber: target.childNumber.value,
      childBirthDate: target.childBirthDate.value,
      department: selectedDepartment,
      contactDate: target.contactDate.value,
      contactOrigin: selectedContactOrigin,
      contactMode: selectedContactMode,
      contactSupport: selectedContactSupport,
      comment: target.comment.value
    }

    // TODO: branchement back
  }

  return <div>
    <LoggedState showButton={false} />

    <Alert
      title="Page en cours de développement"
      severity="info"
    />

    {isLogged &&
      <form onSubmit={createNewContact}>
        <Input
          label="Prénom"
          nativeInputProps={{
            id: "name"
          }} />

        <Input
          label="Nombre d'enfants"
          className={widthFitContent}
          nativeInputProps={{
            type: "number",
            id: "childNumber"
          }} />

        <Input
          label="Date de naissance du dernier enfant"
          className={widthFitContent}
          nativeInputProps={{
            type: "date",
            id: "childBirthDate"
          }} />

        <SelectDepartment setSelectedDepartment={setSelectedDepartment} />

        <Input
          label="Date de prise de contact"
          className={widthFitContent}
          nativeInputProps={{
            type: "date",
            id: "contactDate"
          }} />

        <Select
          label="Provenance du contact"
          nativeSelectProps={{
            onChange: event => setSelectedContactOrigin(event.target.value),
          }}
        >
          <Fragment key=".0">
            <option
              disabled
              hidden
              selected
              value=""
            >
              Sélectionnez une option
            </option>
            {widgetSources.map((source, index) => (
              <option key={index} value={source.nom}>{source.nom}</option>
            ))}
          </Fragment>
        </Select>

        <ContactModeComponent
          label="Mode de prise de contact"
          setSelectedContactMode={setSelectedContactMode} />

        <ContactSupportComponent
          label="La personne contactée a-t'elle été accompagnée ?"
          setSelectedContactSupport={setSelectedContactSupport}
        />

        <Input
          label="Commentaire"
          textArea
          nativeTextAreaProps={{
            id: "comment"
          }} />

        <Button type="submit" onClick={() => { }}>Créer le contact</Button>
      </form>
    }
  </div>
}

export type ContactModeComponentProps = {
  label: string;
  setSelectedContactMode: (arg: string) => void
};

export type ContactSupportComponentProps = {
  label: string;
  setSelectedContactSupport: (arg: string) => void
};


// A remplacer par le composant RadioButton de la lib @codegouvfr/react-dsfr lorsqu'il sera disponible
const ContactModeComponent = ({ label, setSelectedContactMode }: ContactModeComponentProps): JSX.Element => {
  const typeContactList = Object.values(Enum_Demandedecontact_Type_De_Contact)

  const handleContactMode = (event: any) => {
    setSelectedContactMode(event.target.value)
  }

  return (
    <div className="fr-form-group">
      <fieldset className="fr-fieldset fr-fieldset--inline">
        <legend className="fr-fieldset__legend fr-text--regular" id='radio-inline-legend'>
          {label}
        </legend>
        <div className="fr-fieldset__content" onChange={handleContactMode}>
          {typeContactList.map((type, index) => (
            <div className="fr-radio-group" key={index}>
              <input type="radio" id={`radio-mode-${index}`} name="radio-mode" value={type} />
              <label className="fr-label" htmlFor={`radio-mode-${index}`}>{type}
              </label>
            </div>
          ))}
        </div>
      </fieldset >
    </div >
  )
}

const ContactSupportComponent = ({ label, setSelectedContactSupport }: ContactSupportComponentProps): JSX.Element => {
  const supportList = ["Orientée", "Aidée", "Petit échange initial", "Non accompagnée"]

  const handleContactSupport = (event: any) => {
    setSelectedContactSupport(event.target.value)
  }

  return (
    <div className="fr-form-group">
      <fieldset className="fr-fieldset fr-fieldset--inline">
        <legend className="fr-fieldset__legend fr-text--regular" id='radio-inline-legend'>
          {label}
        </legend>
        <div className="fr-fieldset__content" onChange={handleContactSupport}>
          {supportList.map((item, index) => (
            <div className="fr-radio-group" key={index}>
              <input type="radio" id={`radio-support-${index}`} name="radio-support" value={item} />
              <label className="fr-label" htmlFor={`radio-support-${index}`}>{item}
              </label>
            </div>
          ))}
        </div>
      </fieldset >
    </div >
  )
}
