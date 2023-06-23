import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from 'mongoose'
export default async function db(){
    const server= await MongoMemoryServer.create();
    const uri = server.getUri();
    await mongoose.connect(uri, {dbName :"creditCard"})
    console.log(`DataBase ${uri} successfully connected `)
}