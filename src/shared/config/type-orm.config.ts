import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_SCHEMA = process.env.DB_SCHEMA;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  name: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
  entities: [__dirname + './../**/*.entity.{js,ts}'],
  synchronize: false,
};
