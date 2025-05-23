import { Router } from "express";
import { SessionsController } from "@/controllers/sessions-controller";

const sessionsController = new SessionsController();

const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsController.create);

export { sessionsRoutes };
