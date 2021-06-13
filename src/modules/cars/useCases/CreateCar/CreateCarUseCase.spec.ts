/* eslint-disable no-return-await */
import CarsRespositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";

import CreateCarUseCase from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRespositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRespositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("shoud be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description of Car",
      daily_rate: 180,
      license_plate: "ABC-123",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });

  it("shoud not be able to add a new car if licenses plate is already in use ", () => {
    expect(async () => {
      const car = {
        name: "Name Car",
        description: "Description of Car",
        daily_rate: 180,
        license_plate: "ABC-123",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      };
      await createCarUseCase.execute(car);
      await createCarUseCase.execute(car);
    }).toBeInstanceOf(AppError);
  });
});
