import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@codegouvfr/react-dsfr/Button";
import { useEffect } from "react";

export const LoggedState = ({ showButton = true }): JSX.Element => {
  //const [session, loading] = useSession() // strapi V4
  const { data: session, status } = useSession() // strapi V3

  useEffect(() => {
    if (session) localStorage.setItem("token", session.token.jwt)
  }, [session])

  return (
    <div className="logged-state">
      {!session && <>
        {showButton && <Button onClick={() => signIn()}>Connexion</Button>} Vous n&apos;êtes pas connecté
      </>}
      {session && <>
        {showButton && <Button onClick={() => signOut()}>Déconnexion</Button>} Vous êtes connecté en tant que <b>{session.user.username}</b>
      </>}
    </div >
  )
};
