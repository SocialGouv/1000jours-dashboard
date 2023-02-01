import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import { getSession } from "next-auth/react";
import axios from 'axios'
import { LoggedState } from "../src/components/LoggedState";

const Home: NextPage = (initialData: any) => {
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
            src="https://dummyimage.com/300x300/188cf2/fff.png&amp;text=logo+1"
            alt="My description"
          />
        </div>

        <h1>Liste des articles</h1>
        <div>
          {initialData.articles && initialData.articles.map((each: any, index: number) => {
            return (
              <div key={index}>
                <h5>{each.titre}</h5>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ req }: any) {
  let headers = {}
  const session = await getSession({ req });

  if (session) {
    headers = { Authorization: `Bearer ${session.token.jwt}` };
  }
  let articles = [];
  try {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
      headers: headers,
    })
    articles = data;
  } catch (e) {
    articles = [];
  }

  return { props: { articles: articles } }
}

export default Home;
