import {NextFunction, Request, Response} from "express";
import {join} from "path"
import {isProductionEnvironment} from "../util/env.helper";

const fileRegexp = /(\.[^\\]+)$/

let appDir = join(__dirname, "public")

if (isDevelopmentEnvironment()) {
    appDir = join(__dirname, "../../public/")
}

export default function (req: Request, res: Response, next: NextFunction) {
    if (req.path.startsWith("/api")) {
        next()
        return;
    }

    if (!fileRegexp.test(req.baseUrl)) {
        const path = req.path === "/" ? req.path : "index.html"

        res.sendFile(join(appDir, path))
        return
    }

    res.sendFile(join(appDir, req.baseUrl))
}
