import { User } from 'next-auth';

export interface StrapiUser extends User {
  jwt: string
  user: any
}
