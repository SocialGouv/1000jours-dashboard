import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import { StrapiUser } from '../../../../types/StrapiType';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
            identifier: credentials?.email,
            password: credentials?.password
          });

          if (data) return data;
          else return null;
        } catch (e: any) {
          const errorMessage = e.response.data.message
          // Redirecting to the login page with error message in the URL
          throw new Error(errorMessage + '&email=' + credentials?.email)
        }
      }
    })
  ],

  session: {
    strategy: 'jwt'
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      const strapiUser = user as StrapiUser
      if (strapiUser) {
        token.user = strapiUser.user
        token.jwt = strapiUser.jwt
      }
      if (account) token.account = account
      if (profile) token.profile = profile

      return token
    },
    async session({ session, token, user }) {
      if (token) session.token = token

      if (user) session.user = user
      else session.user = token.user

      return session
    },
  },

  debug: true,
})
