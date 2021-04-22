import { Router } from "express";
import multer from "multer";

import CreateCategoryController from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategoriesController.ts";

const categoryRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoryRoutes.post("/", createCategoryController.handle);

categoryRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export default categoryRoutes;
