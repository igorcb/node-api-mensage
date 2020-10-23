import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import Menssage from './Menssage'

@Entity('contacts')
export default class Contact {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    zip_code: string;

    @OneToMany(() => Menssage, menssage => menssage.contact, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'contact_id'})
    menssages: Contact[];

}
