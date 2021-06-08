/* eslint-disable no-return-await */
import CategoriesRepositoryInMemory from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";

import CreateCategoryUseCase from "./CreateCategoryUseCase";

let createCategories: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategories = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("Shoud be able to create new category", async () => {
    const category = {
      name: "Category Y",
      description: "All types Y",
    };
    await createCategories.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated.name).toBe(category.name);
  });

  it("Shoud not be able to create a new category when the aready exist", async () => {
    const CreateCategoryDuplicate = async () => {
      const category = {
        name: "Category Y",
        description: "All types Y",
      };
      await createCategories.execute(category);
      return await createCategories.execute(category);
    };

    expect(CreateCategoryDuplicate).rejects.toBeInstanceOf(AppError);
  });
});
