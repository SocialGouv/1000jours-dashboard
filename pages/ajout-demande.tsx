import React, { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useLazyQuery, useMutation } from '@apollo/client';
import { client } from "../apollo-client"
import { useRouter } from "next/router";
import { useStyles } from "tss-react/dsfr";
import { LoggedState } from "../src/components/LoggedState";
import DatabaseApi from "../src/services/api/database";
import {
  Enum_Contacts_Mode,
  Enum_Contacts_Personne_Accompagnee,
  WidgetEpdsSources,
} from "../src/__generated__/graphql";
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
  const router = useRouter()

  const { status } = useSession()
  const [isLogged, setLogged] = useState<Boolean>()

  const [widgetSources, setWidgetSources] = useState<WidgetEpdsSources[]>([])
  const [selectedDepartment, setSelectedDepartment] = useState<Departement>()
  const [selectedContactOrigin, setSelectedContactOrigin] = useState<string>()
  const [selectedContactMode, setSelectedContactMode] = useState<Enum_Contacts_Mode>()
  const [selectedContactSupport, setSelectedContactSupport] = useState<Enum_Contacts_Personne_Accompagnee>()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLogged(status === "authenticated")

    const getSourcesApi = async () => await getWidgetSourcesRequest()
    getSourcesApi()
  }, [status])

  const [getWidgetSourcesRequest] = useLazyQuery(
    DatabaseApi.GET_WIDGET_SOURCES, {
    client: client,
    onCompleted: (data) => setWidgetSources(sortWidgetSourceByName([...data.widgetEpdsSources])),
    onError: (err) => console.error(err),
  }
  );

  const [saveContactRequest] = useMutation(
    DatabaseApi.SAVE_CONTACT, {
    client: client,
    onCompleted: () => {
      setLoading(false)
      goToHome()
    },
    onError: (err) => console.error(err),
  });

  const createNewContact = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    const target = event.target

    const dataCollected = {
      prenom: target.name.value,
      nombreEnfants: parseInt(target.childNumber.value),
      dateNaissanceDernierEnfant: target.childBirthDate.value,
      departementLibelle: selectedDepartment?.nom,
      departementCode: selectedDepartment?.code,
      datePriseContact: target.contactDate.value,
      provenance: selectedContactOrigin,
      mode: selectedContactMode,
      personneAccompagnee: selectedContactSupport,
      commentaire: target.comment.value
    }

    setLoading(true)
    await saveContactRequest({
      variables: dataCollected
    })
  }

  const goToHome = () => {
    router.push({
      pathname: "/",
    })
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
            onChange: event => setSelectedContactOrigin(event.target.value)
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
              <option key={index} value={source.id}>{source.nom}</option>
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

        <Button type="submit" onClick={() => { }} disabled={isLoading}>Créer le contact</Button>
      </form>
    }
  </div>
}

export type ContactModeComponentProps = {
  label: string;
  setSelectedContactMode: (arg: Enum_Contacts_Mode) => void
};

export type ContactSupportComponentProps = {
  label: string;
  setSelectedContactSupport: (arg: Enum_Contacts_Personne_Accompagnee) => void
};


// A remplacer par le composant RadioButton de la lib @codegouvfr/react-dsfr lorsqu'il sera disponible
const ContactModeComponent = ({ label, setSelectedContactMode }: ContactModeComponentProps): JSX.Element => {
  const typeContactList = Object.values(Enum_Contacts_Mode)

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

// A remplacer par le composant RadioButton de la lib @codegouvfr/react-dsfr lorsqu'il sera disponible
const ContactSupportComponent = ({ label, setSelectedContactSupport }: ContactSupportComponentProps): JSX.Element => {
  const supportList = Object.values(Enum_Contacts_Personne_Accompagnee)

  const labelForEnum = (item: Enum_Contacts_Personne_Accompagnee): string => {
    switch (item) {
      case Enum_Contacts_Personne_Accompagnee.Orientee:
        return "Orientée"
      case Enum_Contacts_Personne_Accompagnee.Aidee:
        return "Aidée"
      case Enum_Contacts_Personne_Accompagnee.EchangeInitial:
        return "Petit échange initial"
      case Enum_Contacts_Personne_Accompagnee.NonAccompagnee:
        return "Non accompagnée"
      default:
        return item
    }
  }

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
              <label className="fr-label" htmlFor={`radio-support-${index}`}>{labelForEnum(item)}
              </label>
            </div>
          ))}
        </div>
      </fieldset >
    </div >
  )
}
