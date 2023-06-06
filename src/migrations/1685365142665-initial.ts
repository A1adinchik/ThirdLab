import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685365142665 implements MigrationInterface {
    name = 'Initial1685365142665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "route" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "duration" integer NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_08affcd076e46415e5821acf52d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hotel" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_3a62ac86b369b36c1a297e9ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "routes_hotels" ADD CONSTRAINT "FK_9b32d88aadf4e015bdd30d3c7b9" FOREIGN KEY ("route_id") REFERENCES "route"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "routes_hotels" ADD CONSTRAINT "FK_e8ca363ddad4dfcb5a893d168fd" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "hotels_routes" ADD CONSTRAINT "FK_13cf17324c3f4d35ee211b58f0d" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "hotels_routes" ADD CONSTRAINT "FK_1e327a22da753ad4b8f9388787e" FOREIGN KEY ("route_id") REFERENCES "route"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotels_routes" DROP CONSTRAINT "FK_1e327a22da753ad4b8f9388787e"`);
        await queryRunner.query(`ALTER TABLE "hotels_routes" DROP CONSTRAINT "FK_13cf17324c3f4d35ee211b58f0d"`);
        await queryRunner.query(`ALTER TABLE "routes_hotels" DROP CONSTRAINT "FK_e8ca363ddad4dfcb5a893d168fd"`);
        await queryRunner.query(`ALTER TABLE "routes_hotels" DROP CONSTRAINT "FK_9b32d88aadf4e015bdd30d3c7b9"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "hotel"`);
        await queryRunner.query(`DROP TABLE "route"`);
    }

}
