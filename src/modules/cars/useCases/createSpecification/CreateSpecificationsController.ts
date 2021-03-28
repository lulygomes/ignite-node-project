import { Request, Response } from "express";

import CreateSpecificationServiceUseCase from "./CreateSpecificationServiceUseCase";

class CreateSpecificationController {
  constructor(private createSpecification: CreateSpecificationServiceUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecification.execute({ name, description });

    return response.status(201).send();
  }
}

export default CreateSpecificationController;
