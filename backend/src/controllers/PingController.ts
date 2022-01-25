import IControllerBase from "./Controller.base";
import {Response} from "express";

class PingController extends IControllerBase {

    public initRoutes(): void {
        this.router.get('/ping', (_, res: Response) => {
            res.json({message: "The service is running!"})
        })
    }
}

export default PingController
