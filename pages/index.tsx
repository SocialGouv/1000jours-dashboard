import React, { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";

import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Button } from "@codegouvfr/react-dsfr/Button";
import Stack from "@mui/material/Stack";

import { signIn, signOut, useSession, getSession } from "next-auth/react";
import axios from 'axios'

const Home: NextPage = (initialData) => {
  //const [session, loading] = useSession() // strapi V4
  const { data: session, status } = useSession() // strapi V3


  useEffect(() => {
    console.log("status : " + status)

    if (status === "authenticated") {
      console.log("session : " + session)
    }
  }, [session, status])

  return (
    <>
      <Head>
        <title>Template | Fabrique numérique des ministères sociaux</title>
      </Head>
      <Alert
        closable
        description="Everything went well"
        severity="success"
        title="Message successfully sent"
      />
      {/* <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle fr-mb-8w fr-mt-8w">
        <div className="fr-col-12 fr-col-md-6">
          <h1>
            Template
            <span className="fr-text--lead d-block fr-mt-3w">
              <p>Template de la fabrique des ministères sociaux.</p>
            </span>
          </h1>
          <p className="fr-mt-10w">
            Pariatur veniam ipsum pariatur elit ullamco sit quis ipsum ad veniam
            proident sunt.
          </p>
        </div>
        <div className="fr-col-12 fr-col-offset-md-1 fr-col-md-4">
          <img
            className="fr-mt-2w"
            src="https://dummyimage.com/300x300/188cf2/fff.png&amp;text=logo+1"
            alt="My description"
          />
        </div>
      </div> */}
      <div>
        <h1>Auth Test</h1>

        <div>
          {!session && <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>}
          {session && <>
            Signed in as {session?.user?.username} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>}
        </div>

        <h1>Content...</h1>

        <div>
          {initialData.articles && initialData.articles.map((each, index) => {
            return (
              <div key={index}>
                <h3>{each.Title}</h3>
                <p>{each.articles}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};


// TODO: vérifier l'utilité
export async function getServerSideProps({ req }) {
  let headers = {}
  console.log("getServerSideProps")
  const session = await getSession({ req });
  if (session) {
    console.log("getServerSideProps session")
    headers = { Authorization: `Bearer ${session.jwt}` };
  }
  let articles = [];
  try {
    let { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
      headers: headers,
    })
    articles = data;
  } catch (e) {
    console.log('caught error');
    articles = [];
  }

  return { props: { articles: articles } }
}

export default Home;
