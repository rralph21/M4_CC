import { Router } from "express";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import {
    getProjectsController,
    createProjectController
} from "../controllers/projectControllers";

const router = Router();

router.get(
    "/projects",authenticate,isAuthorized({ hasRole: ["admin", "lead", "developer"] }),getProjectsController
);


router.post("/projects",authenticate,isAuthorized({ hasRole: ["admin", "lead"] }),createProjectController
);

export default router;