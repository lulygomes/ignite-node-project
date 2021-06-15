import ICreateCarDTO from "../dtos/ICreateCarDTO";
import Car from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensesPlate(licenses_plate: string): Promise<Car>;
  listAll(): Promise<Car[]>;
}

export default ICarsRepository;
