import React, { useEffect, useState } from "react";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSession } from "next-auth/react";
import { useLazyQuery } from "@apollo/client";
import DatabaseApi from "../services/api/database";
import { client } from "../utils/apollo-client";

import { LoggedState } from "../components/LoggedState";
import { Contacts, Enum_Contacts_Personne_Accompagnee } from "../__generated__/graphql";
import { accompagnementEnumToString, dateFormattedToString } from "../utils/main.util";

export default function ListeDemandes() {
  const { data: session, status } = useSession() // strapi V3

  const [isLogged, setLogged] = useState<Boolean>()
  const [contacts, setContacts] = useState<Contacts[]>([])

  useEffect(() => {
    const isAuth = status === "authenticated"
    setLogged(isAuth)

    if (isAuth) {
      const getContactApi = async () => await getContactsRequest()
      getContactApi()
    }
  }, [status])

  const [getContactsRequest] = useLazyQuery(
    DatabaseApi.GET_CONTACTS, {
    client: client,
    onCompleted: (data) => setContacts(data.contacts),
    onError: (err) => console.error(err),
  });

  return (
    <MuiDsfrThemeProvider>
      <LoggedState showButton={false} />

      {isLogged &&
        <>
          <Typography sx={{ mt: 2 }} variant="h4">
            Liste des demandes de contact
          </Typography>
          <DataGridDemo contactsList={contacts} />
        </>
      }
    </MuiDsfrThemeProvider>
  )
}

export type GridComponentProps = {
  contactsList: Contacts[];
};

const DataGridDemo = ({ contactsList }: GridComponentProps): JSX.Element => {
  const columns: GridColDef[] = [
    { headerName: "ID", field: "id", width: 60 },
    { headerName: "Prénom", field: "prenom" },
    { headerName: "Mode de contact", field: "typeDeContact", width: 130 },
    { headerName: "Nbr enfants", field: "nbrEnfants" },
    { headerName: "Provenance", field: "widgetEpdsSource", width: 150 },
    { headerName: "Département", field: "departement", width: 110 },
    { headerName: "Date de création", field: "createAt", width: 130 },
    { headerName: "Accompagnement", field: "accompagnement", width: 150 },
    { headerName: "Date de prise de contact", field: "dateContact", width: 180 },
    { headerName: "Date de naissance du dernier enfant", field: "dateDernierEnfant", width: 270 },
  ];

  const rows = contactsList.map((contact: Contacts) => {
    return {
      id: contact.id,
      prenom: contact.prenom,
      typeDeContact: contact.type_de_contact,
      nbrEnfants: contact.nombre_enfants ?? 0,
      widgetEpdsSource: contact.widget_epds_source?.nom,
      departement: contact.departement_code ?? "",
      createAt: dateFormattedToString(new Date(contact.created_at)),
      accompagnement: accompagnementEnumToString(contact.personne_accompagnee as Enum_Contacts_Personne_Accompagnee),
      dateContact: dateFormattedToString(new Date(contact.date_prise_contact)),
      dateDernierEnfant: dateFormattedToString(new Date(contact.date_naissance_dernier_enfant)),
    }
  })

  return (
    <Box sx={{ height: 800, width: "100%", mt: 7 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection={false}
        disableSelectionOnClick={false}
        experimentalFeatures={{ newEditingApi: true }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              // Liste les colonnes cachées par défaut
              createAt: false,
              departement: false,
              dateDernierEnfant: false,
            }
          }
        }}
      />
    </Box>
  );
};
