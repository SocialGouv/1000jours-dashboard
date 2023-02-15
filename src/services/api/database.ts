import { Enum_Contacts_Type_De_Contact, Enum_Contacts_Personne_Accompagnee } from './../../__generated__/graphql';
import gql from 'graphql-tag';

const DatabaseApi = {
  GET_WIDGET_SOURCES: gql(/* GraphQL */`
    query GetWidgetEpdsSources {
      widgetEpdsSources {
        id
        nom
      }
    }
  `),
  GET_CONTACTS: gql(/* GraphQL */`
  query GetContacts {
    contacts {
      id
      prenom
      nombre_enfants
      departement_code
      departement_libelle
      type_de_contact
      personne_accompagnee
      date_prise_contact
      date_naissance_dernier_enfant
      widget_epds_source { nom }
      commentaire
      created_at
    }
  }
`),
  SAVE_CONTACT: gql(/* GraphQL */`
    mutation saveContact(
      $prenom: String
      $nombreEnfants: Int
      $commentaire: String
      $departementCode: String
      $departementLibelle: String
      $typeDeContact: Enum_Contacts_Type_De_Contact
      $personneAccompagnee: Enum_Contacts_Personne_Accompagnee
      $datePriseContact: Date
      $dateNaissanceDernierEnfant: Date
      $widgetEpdsSource: ID
      ) {
      createContact(
        input: {
          data: {
            prenom: $prenom
            nombre_enfants: $nombreEnfants
            commentaire: $commentaire
            departement_code: $departementCode
            departement_libelle: $departementLibelle
            type_de_contact: $typeDeContact
            personne_accompagnee: $personneAccompagnee
            date_prise_contact: $datePriseContact
            date_naissance_dernier_enfant: $dateNaissanceDernierEnfant
            widget_epds_source: $widgetEpdsSource
          }
        }
      ) {
        contact {
          id
          created_at
        }
      }
    }
  `),
}

export default DatabaseApi;