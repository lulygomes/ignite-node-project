import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoryRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export default categoryRoutes;
