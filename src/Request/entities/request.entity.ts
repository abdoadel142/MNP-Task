import { Donor } from 'src/Donor/entities/donor.entity';
import { Recipient } from 'src/Recipient/entities/recipient.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    Index,
    ManyToOne,
  } from 'typeorm';
  
  @Entity()
  export class Request {
  
    @Index({ unique: true })
    @Column({ primary: true })
    @Generated('increment')
    id?: number;
  
    @CreateDateColumn()
    createdDate!: Date;

    @ManyToOne(() => Donor, (donor) => donor.requests, )
    donor: Donor;

    @ManyToOne(() => Recipient, (recipient) => recipient.request, )
    recipient: Recipient;
    
    @Column()
    mobile_number: string;

    @Column({default:"pending"})
    status: string;
  
  }