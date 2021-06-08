import { Router } from "express";

import CreateSpecificationController from "@modules/cars/useCases/createSpecification/CreateSpecificationsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);

export default specificationRoutes;
