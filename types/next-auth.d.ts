import { Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    token: JWT
    user : User
  }

  interface User {
    email: string
    username: string
    confirmed: boolean
    blocked: boolean
    created_at: string
    provider: string
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    user: User
    account: Account
    profile: Profile
    jwt: String
  }
}