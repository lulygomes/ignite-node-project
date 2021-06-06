/* eslint-disable no-return-await */
import { AppError } from "@erros/AppError";
import ICreateUserDTO from "@modules/accounts/dtos/ICreateUserDTO";
import UsersRepositoryInMemory from "@modules/accounts/repositories/in-memory/UsersRespositoryInMemory";
import CreateUserUseCase from "@modules/accounts/useCases/createUser/CreateUserUseCase";

import AuthenticateUserUseCase from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUsersUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUsersUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Shoud be able to create a token", async () => {
    const user: ICreateUserDTO = {
      name: "John Doe",
      email: "john@mail.com",
      password: "123",
      driver_license: "123",
    };
    await createUsersUseCase.execute(user);
    const response = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty("token");
  });

  it("Shoud not be able to create a token with a wrong E-mail", () => {
    const loginWithWornMail = async () => {
      const user: ICreateUserDTO = {
        name: "John Doe",
        email: "john@mail.com",
        password: "123",
        driver_license: "123",
      };
      await createUsersUseCase.execute(user);
      return await authenticateUserUseCase.execute({
        email: "wrong@mail.com",
        password: user.password,
      });
    };

    expect(loginWithWornMail).rejects.toBeInstanceOf(AppError);
  });

  it("Shoud not be able to create a token with a wrong Password", () => {
    const loginWithWornMail = async () => {
      const user: ICreateUserDTO = {
        name: "John Doe",
        email: "john@mail.com",
        password: "123",
        driver_license: "123",
      };
      await createUsersUseCase.execute(user);
      return await authenticateUserUseCase.execute({
        email: user.email,
        password: "wrongPassword",
      });
    };

    expect(loginWithWornMail).rejects.toBeInstanceOf(AppError);
  });

  it("Shoud not be able to create a token with a non exist user", () => {
    const loginWithWornMail = async () => {
      const user: ICreateUserDTO = {
        name: "John Doe",
        email: "john@mail.com",
        password: "123",
        driver_license: "123",
      };

      return await authenticateUserUseCase.execute({
        email: user.email,
        password: user.password,
      });
    };

    expect(loginWithWornMail).rejects.toBeInstanceOf(AppError);
  });
});
