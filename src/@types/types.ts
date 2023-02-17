export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface IUserData {
  name: string;
  message: string;
  email: string;
}

export interface ISelectedUser {
  name: string;
  email: string;
}

// export type ApiResponse<T> = Promise<ApiData<T>>;

// export interface ApiData<T> {
//   data?: T;
//   error?: ErrorContent;
// }

// export interface ErrorContent {
//   message?: string;
//   code?: number;
// }
