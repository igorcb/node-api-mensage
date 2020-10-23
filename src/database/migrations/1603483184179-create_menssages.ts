import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createMenssages1603483184179 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'menssages',
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
          name: 'content',
          type: 'varchar'
        },
        {
          name: 'contact_id',
          type: 'integer'
        },
      ],
      foreignKeys: [
        {
          name: 'MessageContact_FK',
          columnNames: ['contact_id'],
          referencedTableName: 'contacts',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('menssages')
  }

}
