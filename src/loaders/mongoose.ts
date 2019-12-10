import { Db } from "mongodb";
import mongoose from "mongoose";
import config from "../config";

export default async (): Promise<Db> => {
    const mongodb = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
    return mongodb.connection.db;
};
