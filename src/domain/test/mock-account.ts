import { AccountModel } from "@/domain/models/account";

import faker from "faker";
import { AddAccountParams } from "@/domain/usecase/account/add-acount";

export const mockAccountParams = (): AddAccountParams => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccount = (): AccountModel => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  name: faker.name.findName(),
  password: faker.internet.password()
})
