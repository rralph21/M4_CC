import { Router } from "express";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import {
    getProjectsController,
    createProjectController
} from "../controllers/projectControllers";

const router = Router();

/*
GET /projects
admin, lead, developer
*/
router.get(
    "/projects",authenticate,isAuthorized({ hasRole: ["admin", "lead", "developer"] }),getProjectsController
);

/*
POST /projects
admin, lead
*/
router.post(
    "/projects",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead"] }),
    createProjectController
);

export default router;