import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333;

const app = express();
app.use(express.json());
app.use(routes);

app.use((erro: any, request: Request, response: Response, _: NextFunction) => {
  if (erro instanceof AppError) {
    return response.status(erro.statusCode).json({ message: erro.message });
  }

  return response.status(500).json({ message: erro.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
