import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Contact from './Contact'

@Entity('menssages')
export default class Menssages {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Contact, contact => contact.menssages)
  @JoinColumn({name: 'contact_id'})
  contact: Contact;
}