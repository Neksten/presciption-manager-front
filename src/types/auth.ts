export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IUser {
  fullName: string;
}

export interface IAuthResponse {
  token: string;
}
