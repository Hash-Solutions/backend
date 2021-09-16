import { AccountModel } from "@/domain/models/account";

export type AddAccountParams = Omit<AccountModel, 'id'>;

export interface addAcount {
  add: (account: AddAccountParams) => Promise<AccountModel>;
}
