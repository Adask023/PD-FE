


export interface registerPayload {
  user_id: string;
  user_name: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  userType: 'user' | 'creator';
}