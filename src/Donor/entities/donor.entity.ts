import { Request } from 'src/Request/entities/request.entity';
import {
    Column,
    Entity,
    Generated,
    Index,
    OneToMany,
  } from 'typeorm';
  @Entity()
  export class Donor {
  
    @Index({ unique: true })
    @Column({ primary: true })
    @Generated('increment')
    id?: number;

    @OneToMany(() => Request, (request) => request.donor)
    requests: Request[];
  
    @Column()
    operator: string;
  
  }