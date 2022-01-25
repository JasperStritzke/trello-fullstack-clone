import express, {Handler, Router, Application} from "express";
import spaHandler from "./middelwares/spa.handler";
import ControllerBase from "./controllers/Controller.base";

class App {

    private readonly app: Application
    private readonly port: number

    constructor(
        appInit: {
            port: number;
            middleWares: Handler[];
            controllers: ControllerBase[]
        }
    ) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.spa()
    }

    private middlewares(middleWares: Handler[]) {
        middleWares.forEach(middleWare => this.app.use(middleWare))
    }

    private routes(controllers: ControllerBase[]) {
        const apiRouter = Router()

        controllers.forEach(controller => apiRouter.use("/", controller.router))

        this.app.use("/api", apiRouter)
    }

    private spa() {
        this.app.use("*", spaHandler)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App started on port ${this.port}`)
        })
    }
}

export default App
