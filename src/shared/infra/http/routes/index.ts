import { Router } from "express";

import authenticateRoutes from "./authenticate.routes";
import carsRoutes from "./cars.routes";
import categoryRoutes from "./categories.routes";
import specificationRoutes from "./specifications.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specification", specificationRoutes);
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use(authenticateRoutes);

export default router;
