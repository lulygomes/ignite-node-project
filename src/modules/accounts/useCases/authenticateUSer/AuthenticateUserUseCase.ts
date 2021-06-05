import { compare } from "bcryptjs";
import { response } from "express";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse | any> {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        throw new AppError("Email/Senha inválidos", 401);
      }
      const passwordIsValid = await compare(password, user.password);

      if (!passwordIsValid) {
        throw new AppError("Email/Senha inválidos", 401);
      }

      const token = sign({}, "jkhfkjahskdfjhl543423454", {
        subject: user.id,
        expiresIn: "1d",
      });

      const tokenReturn: IResponse = {
        token,
        user: {
          name: user.name,
          email: user.email,
        },
      };

      return tokenReturn;
    } catch (err) {
      console.log(err);
      return { err };
    }
  }
}

export default AuthenticateUserUseCase;
