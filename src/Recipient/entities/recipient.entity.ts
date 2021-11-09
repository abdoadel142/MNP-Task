import { Request } from 'src/Request/entities/request.entity';
import {
  Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity()
  export class Recipient {
  
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToMany(() => Request, request => request.recipient)
    request: Request;
    
    @Column()
    operator: string;
  
  }