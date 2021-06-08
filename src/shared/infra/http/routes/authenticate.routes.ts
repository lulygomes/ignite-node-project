import { Router } from "express";

import AuthenticateUserController from "@modules/accounts/useCases/authenticateUSer/AuthenticateUserController";

const authenticateRoutes = Router();
const authenticateController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateController.handle);

export default authenticateRoutes;
