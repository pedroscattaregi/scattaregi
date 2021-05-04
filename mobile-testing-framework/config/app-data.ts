import { banQiUser, p2pTransferReceiver, changePinUser } from '@root/app-data.json';

export const appData = {
  loginUser: {
    cpf: banQiUser.cpf,
    password: banQiUser.password,
    pin: banQiUser.pin,
    email: banQiUser.email,
  },
  p2pTransferReceiver: {
    phoneNumber: p2pTransferReceiver.phoneNumber,
  },
  changePinUser: {
    cpf: changePinUser.cpf,
    password: changePinUser.password,
    pin: changePinUser.pin
  }
};