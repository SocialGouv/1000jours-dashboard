import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { MentionPart } from "../components/MentionPart";

const MentionsLegales: NextPage = () => {
  return (
    <>
      <Head>
        <title>Template | Mention l&eacute;gales</title>
      </Head>
      <div className="fr-container fr-my-6w">
        <h1>Mentions légales</h1>
        <div>
          <MentionPart
            title="Éditeur"
            description="Ce site est édité par la Direction générale de la Cohésion sociale 
              au sein de la Fabrique numérique des ministères sociaux :"
          >
            <p className="fr-mb-2w">
              18 place des 5-Martyrs-du-Lycée-Buffon <br />
              75014 Paris <br />
            </p>
          </MentionPart>
          <MentionPart
            title="Directeur de la publication"
            description="Monsieur Jean-Benoît DUJOL, Directeur général de la cohésion sociale"
          />
          <MentionPart
            title="Hébergement du site"
            description="Ce site est hébergé par :"
          >
            <p className="fr-mb-2w">
              <a target="_blank" href="https://www.ovh.com" rel="noreferrer">
                OVH SAS
              </a>
              <br />
              Siège social : 2 rue Kellermann - 59100 Roubaix - France.
              <br />
            </p>
          </MentionPart>
          <MentionPart
            title="Accessibilité"
            description="La conformité aux normes d’accessibilité numérique est un objectif 
              ultérieur mais nous tâchons de rendre ce site accessible à toutes et à tous."
            divProps={{
              id: "accessibilite",
            }}
          >
            <h3>Signaler un dysfonctionnement</h3>
            <p className="fr-mb-2w">
              Si vous rencontrez un défaut d’accessibilité vous empêchant
              d’accéder à un contenu ou une fonctionnalité du site, merci de
              nous en faire part.
              <br />
              Si vous n’obtenez pas de réponse rapide de notre part, vous êtes
              en droit de faire parvenir vos doléances ou une demande de saisine
              au Défenseur des droits.
            </p>

            <p>
              En savoir plus
              <br />
              Pour en savoir plus sur la politique d’accessibilité numérique de
              l’État :
              <a
                href="http://references.modernisation.gouv.fr/accessibilite-numerique"
                target="_blank"
                rel="noreferrer"
              >
                http://references.modernisation.gouv.fr/accessibilite-numerique
              </a>
            </p>
          </MentionPart>
          <MentionPart
            title="Sécurité"
            description="Le site est protégée par un certificat électronique, matérialisé pour 
            la grande majorité des navigateurs par un cadenas. Cette protection participe à la 
            confidentialité des échanges. En aucun cas les services associés à la plateforme ne 
            seront à l’origine d’envoi de courriels pour demander la saisie d’informations personnelles."
          />
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
