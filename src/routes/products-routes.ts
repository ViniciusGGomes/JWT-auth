import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const productsController = new ProductsController();

const productsRoutes = Router();

productsRoutes.get("/", productsController.index);

// Autorização em uma rota especifica
productsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "admin"]),
  productsController.create
);

export { productsRoutes };
