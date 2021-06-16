import { getRepository, Repository } from "typeorm";

import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";

import Car from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    brand,
    description,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }
  async findByLicensesPlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate,
    });
    return car;
  }
  async listAll(): Promise<Car[]> {
    const cars = await this.repository.find();

    return cars;
  }
}

export default CarsRepository;
