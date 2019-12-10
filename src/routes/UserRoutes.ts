import { Request, Response, Router } from "express";
import { users } from "../data/users";

class UserRoutes {
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    /**
     * @desc Defines all route for user module
     * @return void
     */
    public routes(): void {
        this.router.get("/", this.getUsers);
    }

    /**
     * @desc Function to return list of users
     * @param req:Request res: Response
     * @return Array[] - list of users
     */
    public async getUsers(req: Request, res: Response) {
        res.json(users);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;
