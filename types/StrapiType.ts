import { User } from 'next-auth';

export interface StrapiUser extends User {
  jwt: String
  user: any
}
