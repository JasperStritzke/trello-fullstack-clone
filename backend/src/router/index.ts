import {Router} from "express";

const router = Router()

router.get("/ping", (_, res) => {
    res.status(200).json({ message: "Running :)" });
    res.json;
});

export default router
