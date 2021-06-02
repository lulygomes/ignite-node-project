import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationServiceUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationExist = await this.specificationRepository.findByName(
      name
    );

    if (specificationExist) {
      throw new AppError("Specification already exist");
    }
    await this.specificationRepository.create({ name, description });
  }
}

export default CreateSpecificationServiceUseCase;
