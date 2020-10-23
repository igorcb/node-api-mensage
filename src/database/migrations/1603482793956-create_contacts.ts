import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createContacts1603482793956 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'contacts',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'phone',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'address',
          type: 'varchar'
        },
        {
          name: 'neighborhood',
          type: 'varchar'
        },        
        {
          name: 'city',
          type: 'varchar'
        },
        {
          name: 'zip_code',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts')
  }

}
