import express from "express";
import UserRoutes from "./routes/UserRoutes";
import config from "./config";


// Server class
class Server {
    public app: express.Application;
    constructor() {
        this.app = express();
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
    }

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
