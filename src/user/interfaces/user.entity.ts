/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user'})
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'email', nullable: false})
    email: string;

    @Column({name: 'password', nullable: false})
    password: string;
    
    @Column({name: 'google_id'})
    google_id: string;
    
    @Column({name: 'google_access_token'})
    google_access_token: string;

    @Column({name: 'google_refresh_token'})
    google_refresh_token: string;
    
    @Column({name: 'course'})
    course: string;
    
    @Column({name: 'semester'})
    semester: number;
}