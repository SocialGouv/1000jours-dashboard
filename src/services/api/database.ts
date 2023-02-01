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
  SAVE_CONTACT: gql(/* GraphQL */`
    mutation saveContact(
      $prenom: String
      $nombreEnfants: Int
      $commentaire: String
      $departementCode: String
      $departementLibelle: String
      $mode: ENUM_CONTACTS_MODE
      $personneAccompagnee: ENUM_CONTACTS_PERSONNE_ACCOMPAGNEE
      $datePriseContact: Date
      $dateNaissanceDernierEnfant: Date
      $provenance: ID
      ) {
      createContact(
        input: {
          data: {
            prenom: $prenom
            nombre_enfants: $nombreEnfants
            commentaire: $commentaire
            departement_code: $departementCode
            departement_libelle: $departementLibelle
            mode: $mode
            personne_accompagnee: $personneAccompagnee
            date_prise_contact: $datePriseContact
            date_naissance_dernier_enfant: $dateNaissanceDernierEnfant
            provenance: $provenance
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