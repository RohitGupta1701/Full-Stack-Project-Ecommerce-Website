import  express from "express";
// import { isAdmin, requireSignIn } from './../middlewares/authMiddleware';
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getSingleProductController, getproductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//Routes
router.post("/create-product",formidable(), createProductController);

//Routes
router.put("/update-product/:pid", formidable(), updateProductController);

//get products
router.get("/get-product", getproductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter Product
router.post('/product-filters', productFiltersController);

//product count
router.get('/product-count', productCountController);

//product per page
router.get('/product-list/:page', productListController);

//search Product
router.get('/search/:keyword', searchProductController)

//similar Product
router.get('related-product/:pid/:cid', relatedProductController);

//category wise product
router.get('/product-category/:slug', productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment",  brainTreePaymentController);

export default router;