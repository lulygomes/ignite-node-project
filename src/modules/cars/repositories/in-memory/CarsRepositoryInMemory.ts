import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";
import Car from "@modules/cars/infra/typeorm/entities/Car";

import ICarsRepository from "../ICarsRepository";

class CarsRespositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      name,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    });

    this.cars.push(car);
  }

  async findByLicensesPlate(licenses_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.license_plate === licenses_plate);

    return car;
  }
}

export default CarsRespositoryInMemory;
