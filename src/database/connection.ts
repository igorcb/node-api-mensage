import "reflect-metadata";
import {createConnection} from "typeorm";
import 'dotenv/config';

const { POSTGRES_DB } = process.env;
const { POSTGRES_HOST } = process.env;
const { POSTGRES_PORT } = process.env;
const { POSTGRES_USER } = process.env;
const { POSTGRES_PASSWORD } = process.env;
 
createConnection({
    type: "postgres",
    host: POSTGRES_HOST,
    port: Number(POSTGRES_PORT),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,   
    migrations: [
      "./src/database/migrations/*.ts"
    ],
    entities: [
      "./src/models/*.ts"
    ],    
    cli: {
      migrationsDir: 'src/database/migrations',
    }   
}).then(connection => {
   console.log("Database connect sucessfull !!!" );
}).catch(error => console.log(error));