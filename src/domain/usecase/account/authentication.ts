import { AuthenticationModel } from "@/domain/models/authentication";

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (authenticationParameters: AuthenticationParams) => Promise<AuthenticationModel>;
}