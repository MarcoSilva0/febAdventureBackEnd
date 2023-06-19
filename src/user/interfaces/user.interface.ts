/* eslint-disable prettier/prettier */
export interface User {
    id: number
    name: string;
    email: string;
    password: string;
    google_id: string;
    google_access_token: string;
    google_refresh_token: string;
    course: string;
    semester: number;
}