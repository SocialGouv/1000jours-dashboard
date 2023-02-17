import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { LoggedState } from "../components/LoggedState";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>1000 premiers jours - Dashboard</title>
      </Head>

      <LoggedState />

      <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle fr-mb-8w fr-mt-8w">
        <div className="fr-col-12 fr-col-md-6">
          <h1>
            Dashboard
            <span className="fr-text--lead d-block fr-mt-3w">
              <p>Gestion & visualisation des demandes de contact</p>
            </span>
          </h1>

          <p className="fr-mt-10w">
            Bienvenue sur la dashbard de 1000 premiers
          </p>
        </div>
        <div className="fr-col-12 fr-col-offset-md-1 fr-col-md-4">
          <img
            className="fr-mt-2w"
            src={"/logo-1000j-blues.svg"}
            alt="Logo 1000 premiers jours"
          />
        </div>
      </div>
    </>
  );
};

export default Home;