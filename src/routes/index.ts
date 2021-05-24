import { Router } from "express";

import categoryRoutes from "./categories.routes";
import specificationRoutes from "./specifications.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specification", specificationRoutes);
router.use("/users", usersRoutes);

export default router;
