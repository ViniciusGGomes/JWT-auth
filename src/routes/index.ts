import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { sessionsRoutes } from "./sessions-routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/sessions", sessionsRoutes)

export { routes };
