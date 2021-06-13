import { inject, injectable } from "tsyringe";

import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/erros/AppError";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}
  async execute({
    name,
    description,
    daily_rate,
    fine_amount,
    brand,
    license_plate,
    category_id,
  }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findByLicensesPlate(
      license_plate
    );

    if (carExist) {
      throw new AppError("Licenses plate already in use");
    }

    await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      category_id,
      brand,
    });
  }
}

export default CreateCarUseCase;
