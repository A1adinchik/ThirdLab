import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685214359109 implements MigrationInterface {
    name = 'Initial1685214359109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "route" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "duration" integer NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_08affcd076e46415e5821acf52d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hotel" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_3a62ac86b369b36c1a297e9ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "route_hotels_hotel" ("routeId" integer NOT NULL, "hotelId" integer NOT NULL, CONSTRAINT "PK_d793448a5e59c5bef1c34d7b1b2" PRIMARY KEY ("routeId", "hotelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4883bc2b5ad675cfcc8ff6f999" ON "route_hotels_hotel" ("routeId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d59fbaa7bee00f3c7a9239fff5" ON "route_hotels_hotel" ("hotelId") `);
        await queryRunner.query(`ALTER TABLE "route_hotels_hotel" ADD CONSTRAINT "FK_4883bc2b5ad675cfcc8ff6f9997" FOREIGN KEY ("routeId") REFERENCES "route"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "route_hotels_hotel" ADD CONSTRAINT "FK_d59fbaa7bee00f3c7a9239fff5d" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "route_hotels_hotel" DROP CONSTRAINT "FK_d59fbaa7bee00f3c7a9239fff5d"`);
        await queryRunner.query(`ALTER TABLE "route_hotels_hotel" DROP CONSTRAINT "FK_4883bc2b5ad675cfcc8ff6f9997"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d59fbaa7bee00f3c7a9239fff5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4883bc2b5ad675cfcc8ff6f999"`);
        await queryRunner.query(`DROP TABLE "route_hotels_hotel"`);
        await queryRunner.query(`DROP TABLE "hotel"`);
        await queryRunner.query(`DROP TABLE "route"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
