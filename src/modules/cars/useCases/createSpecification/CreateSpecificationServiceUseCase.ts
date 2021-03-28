import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationServiceUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationExist = this.specificationRepository.findByName(name);

    if (specificationExist) {
      throw new Error("Specification already exist");
    }
    this.specificationRepository.create({ name, description });
  }
}

export default CreateSpecificationServiceUseCase;
