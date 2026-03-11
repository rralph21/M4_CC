import express, { Router } from "express";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

// Only admins can view detailed user information
router.get(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin"] })
);

export default router;