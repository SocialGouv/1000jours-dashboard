import React, { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from '@apollo/client';

import { Input } from "@codegouvfr/react-dsfr/Input";
import { ToggleSwitch } from "@codegouvfr/react-dsfr/ToggleSwitch";
import { SelectDepartment } from "../src/components/SelectDepartment";
import { useStyles } from "tss-react/dsfr";
import { LoggedState } from "../src/components/LoggedState";
import DatabaseApi from "../src/services/api/database";
import { Enum_Demandedecontact_Type_De_Contact, WidgetEpdsSources } from "../src/__generated__/graphql";
import Select from "@codegouvfr/react-dsfr/Select";
import Button from "@codegouvfr/react-dsfr/Button";


export default function AjoutDemande() {
  const { css } = useStyles();
  const widthFitContent = css({ width: "fit-content" })

  const { data: session, status } = useSession()

  const [widgetSources, setWidgetSources] = useState<WidgetEpdsSources[]>([]);

  useEffect(() => {
    console.log("sessions : " + session)
  }, [])

  const { loading, data, error } = useQuery(
    DatabaseApi.GET_WIDGET_SOURCES
  );


  useEffect(() => {
    if (data) {
      // TODO: Utils + TU
      const dataSorted: WidgetEpdsSources[] = [...data.widgetEpdsSources]
      dataSorted.sort((a, b) => a.nom < b.nom ? -1 : a.nom > b.nom ? 1 : 0)
      setWidgetSources(dataSorted)
    }
  }, [data])

  return <div>
    <LoggedState showButton={false} />

    <Input label="Prénom" />

    <Input
      label="Nombre d'enfants"
      className={widthFitContent}
      nativeInputProps={{
        type: 'number'
      }} />

    <Input
      label="Date de naissance du dernier enfant"
      className={widthFitContent}
      nativeInputProps={{
        type: 'date'
      }} />

    <SelectDepartment />

    <Input
      label="Date de prise de contact"
      className={widthFitContent}
      nativeInputProps={{
        type: 'date'
      }} />

    <Select
      label="Provenance du contact"
      nativeSelectProps={{}}
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
          <option key={index} value="source">{source.nom}</option>
        ))}
      </Fragment>
    </Select>

    <ContactMethodComponent label="Mode de prise de contact" />

    <ToggleSwitch
      label="La personne contactée a-t'elle été accompagnée ?"
      inputTitle="the-title"
      labelPosition="left"
      showCheckedHint={false}
    />

    <Input
      label="Commentaire"
      textArea />

    <Button>Créer le contact</Button>
  </div>
}

export type ContactMethodComponentProps = {
  label: string;
};

// A remplacer par le composant RadioButton de la lib @codegouvfr/react-dsfr lorsqu'il sera disponible
const ContactMethodComponent = ({ label }: ContactMethodComponentProps): JSX.Element => {
  const typeContactList = Object.values(Enum_Demandedecontact_Type_De_Contact)

  return (
    <div className="fr-form-group">
      <fieldset className="fr-fieldset fr-fieldset--inline">
        <legend className="fr-fieldset__legend fr-text--regular" id='radio-inline-legend'>
          {label}
        </legend>
        <div className="fr-fieldset__content">
          {typeContactList.map((type, index) => (
            <div className="fr-radio-group" key={index}>
              <input type="radio" id={`radio-inline-${index}`} name="radio-inline" />
              <label className="fr-label" htmlFor={`radio-inline-${index}`}>{type}
              </label>
            </div>
          ))}
        </div>
      </fieldset >
    </div >
  )
}
