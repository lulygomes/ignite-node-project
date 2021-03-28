import { Router } from "express";

import categoryRoutes from "./categories.routes";
import specificationRoutes from "./specifications.routes";

const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/specification", specificationRoutes);

export default routes;
