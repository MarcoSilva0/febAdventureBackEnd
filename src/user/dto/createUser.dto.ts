/* eslint-disable prettier/prettier */
export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  google_id: string;
  google_access_token: string;
  google_refresh_token: string;
  course: string;
  semester: number;
}
