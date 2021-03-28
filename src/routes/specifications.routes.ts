import { Router } from "express";

import createSpecification from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecification.handle(request, response);
});

export default specificationRoutes;
