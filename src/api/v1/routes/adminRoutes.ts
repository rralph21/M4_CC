import { Router } from 'express';
import {setUserClaims} from "../controllers/adminController"
import authenticate from "../middleware/authenticate";

const adminRoutes: Router = Router();

// no roles defined to set up inital admin user
// upate this route to be protected by admin role after setting up the initial admin user
adminRoutes.post('/admin/setClaims',authenticate, setUserClaims);

export default adminRoutes;