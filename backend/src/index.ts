import dotenv from "dotenv"

dotenv.config()
import App from "./app";
import PingController from "./controllers/PingController";

new App({
    port: +process.env.PORT | 8080,
    middleWares: [],
    controllers: [
        new PingController()
    ],
}).listen()
