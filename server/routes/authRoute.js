import express from "express";
import {registerController, loginController, testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router Object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//Login || METHOD POST
router.post('/login', loginController );

//Forget Password || POST
router.post('/forgot-password', forgotPasswordController);

//test Routes
router.get('/test', requireSignIn,isAdmin, testController);

//protected USer route auth
router.get("/user_auth", requireSignIn, (req, res) =>{
    res.status(200).send({ok:true})
})

//protected Admin route auth
router.get("/admin_auth", requireSignIn, isAdmin, (req, res) =>{
    res.status(200).send({ok:true})
});

//update Profile
router.put('/profile',  updateProfileController);

//orders
router.get('/orders', getOrdersController);

//all orders
router.get('all-orders', getAllOrdersController);

//order status update
router.put('/order-status/:orderId', orderStatusController);

export default router;