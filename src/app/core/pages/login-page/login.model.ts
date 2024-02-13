export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface LoginPayload {
  user_name: string;
  password: string;
}

export interface UserData {
  access_token: string;
  token_type: string;
  user: string;
  user_type: string;
}