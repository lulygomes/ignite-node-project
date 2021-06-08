import { getRepository, Repository } from "typeorm";

import ICreateUserDTO from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import User from "../entities/User";

class UsersRepository implements IUsersRepository {
  private respository: Repository<User>;

  constructor() {
    this.respository = getRepository(User);
  }
  async create({
    id,
    name,
    email,
    driver_license,
    password,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.respository.create({
      id,
      name,
      email,
      driver_license,
      password,
      avatar,
    });

    await this.respository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.respository.findOne({ where: { email } });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.respository.findOne(id);

    return user;
  }
}

export { UsersRepository };
