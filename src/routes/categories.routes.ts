import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";

const categoryRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoryRoutes.post("/", async (request, response) => {
  const { name, description } = request.body;
  const createCategory = new CreateCategoryService(categoriesRepository);

  createCategory.execute({ name, description });

  response.status(201).send();
});

categoryRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export default categoryRoutes;
