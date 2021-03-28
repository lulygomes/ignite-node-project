import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";
import CreateSpecificationsController from "./CreateSpecificationsController";
import CreateSpecificationServiceUseCase from "./CreateSpecificationServiceUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationServiceUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationsController(
  createSpecificationService
);

export default createSpecificationController;
