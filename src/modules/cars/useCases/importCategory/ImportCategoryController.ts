import { Request, Response } from "express";

import ImportCategoryUseCase from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategory: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategory.execute(file);

    return response.send();
  }
}

export default ImportCategoryController;
