import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDescriptionOnSpecifications1622629410399
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "specifications",
      new TableColumn({
        name: "description",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("specifications", "description");
  }
}
