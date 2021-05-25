import { Router } from "express";
import multer from "multer";

import CreateCategoryController from "../modules/cars/useCases/createCategory/CreateCategoryController";
import ImportCategoryController from "../modules/cars/useCases/importCategory/ImportCategoryController";
import ListCategoriesController from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoryRoutes = Router();

const importCategoryController = new ImportCategoryController();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

const upload = multer({
  dest: "./tmp",
});

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", listCategoriesController.handle);

categoryRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export default categoryRoutes;
