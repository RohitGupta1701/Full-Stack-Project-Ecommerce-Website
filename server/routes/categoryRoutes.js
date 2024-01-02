import express from "express";
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";



const router = express.Router();

//route
router.post("/create-category",  createCategoryController)

//update category
router.put("/update-category/:id", updateCategoryController)

//getAll Category
router.get("/get-category", categoryController)

//single Category
router.get("/single-category/:slug", singleCategoryController)

//delete category
router.delete("/delete-category/:id",  deleteCategoryController)

export default router;