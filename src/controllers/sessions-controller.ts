import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { sign } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    const fakeUser = {
      id: "1",
      username: "Vinícius",
      password: "123456",
      role: "sale",
    };

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("Usuário e/ou senha incorreta", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role: fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    });

    return response.status(201).json({ token });
  }
}

export { SessionsController };
