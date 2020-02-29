import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1583016779279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        { name: 'id', type: 'int', isPrimary: true, isGenerated: true },
        { name: 'firstName', type: 'varchar' },
        { name: 'lastName', type: 'varchar' },
        { name: 'age', type: 'int' },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('users');
  }
}
