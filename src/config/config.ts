import dotenv from 'dotenv';
dotenv.config()

const SERVER_PORT = 4001;

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

const MONGO_URL = 'mongodb+srv://Madhu123:Madhurohi3103@nalanda.nushu.mongodb.net/library-management'

 export const config = {
    mongo:{
            url:MONGO_URL
    },
    server:{
            port:SERVER_PORT
    }

}

