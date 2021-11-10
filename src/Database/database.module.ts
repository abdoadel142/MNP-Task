import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        // host: process.env.DATABASE_HOST,
        // port: Number(process.env.DATABASE_PORT),
        // username: process.env.DATABASE_USER,
        // password: process.env.DATABASE_PASSWORD,
        // database: process.env.DATABASE_DB,
        host:"localhost",
        port: 3306,
        username: 'root',
        password: "root",
        database: "mnp",
        synchronize: true,
        entities:["dist/**/*.entity{.ts,.js}"],
        // dropSchema: true,

      }),
  
  ],
})
export class DatabaseModule {}
