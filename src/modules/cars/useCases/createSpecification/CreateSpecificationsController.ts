import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateSpecificationServiceUseCase from "./CreateSpecificationServiceUseCase";

class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecification = container.resolve(
      CreateSpecificationServiceUseCase
    );

    createSpecification.execute({ name, description });

    return response.status(201).send();
  }
}

export default CreateSpecificationController;
