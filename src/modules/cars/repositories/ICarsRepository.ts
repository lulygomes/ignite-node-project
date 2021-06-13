import ICreateCarDTO from "../dtos/ICreateCarDTO";
import Car from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicensesPlate(licenses_plate: string): Promise<Car>;
}

export default ICarsRepository;
