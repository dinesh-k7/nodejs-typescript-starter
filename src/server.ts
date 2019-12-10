import express from "express";
import { Db } from "mongodb";
import mongoose from "mongoose";
import config from "./config";
import mongoDB from "./loaders/mongoose";
import UserRoutes from "./routes/UserRoutes";

// Server class
class Server {
    public app: express.Application;
    public mongoDB: Promise<Db>;
    constructor() {
        this.app = express();
        this.mongoDB = mongoDB();
        this.config();
        this.routes();
    }

    /**
     * @desc Set the initial values required for creating a server
     * @return void
     */
    public config(): void {
        this.app.set("port", config.port);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };

    /**
     * @desc Defines possible route for the server to listen
     * @return void
     */
    public routes(): void {
        this.app.use("/", UserRoutes);
    }

    /**
     * @desc Server will listen on defined port
     * @return void
     */
    public start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server is listenning on port", this.app.get("port"));
        });
    }
}

const server = new Server();
server.start();
