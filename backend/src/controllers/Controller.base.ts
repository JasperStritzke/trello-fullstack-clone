import {Router} from "express";

abstract class ControllerBase {

    public readonly name: string
    public router: Router;

    protected constructor(name?: string | undefined) {
        this.name = name;
        this.router = Router();

        this.initRoutes()
    }

    abstract initRoutes(): void
}

export default ControllerBase
