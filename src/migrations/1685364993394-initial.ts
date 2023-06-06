import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685364993394 implements MigrationInterface {
    name = 'Initial1685364993394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "routes_hotels" ("route_id" integer NOT NULL, "hotel_id" integer NOT NULL, CONSTRAINT "PK_2d26bf1c1a36bf376fec564434f" PRIMARY KEY ("route_id", "hotel_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9b32d88aadf4e015bdd30d3c7b" ON "routes_hotels" ("route_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e8ca363ddad4dfcb5a893d168f" ON "routes_hotels" ("hotel_id") `);
        await queryRunner.query(`CREATE TABLE "hotels_routes" ("hotel_id" integer NOT NULL, "route_id" integer NOT NULL, CONSTRAINT "PK_a7b047a12693985e120a97e7df4" PRIMARY KEY ("hotel_id", "route_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_13cf17324c3f4d35ee211b58f0" ON "hotels_routes" ("hotel_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1e327a22da753ad4b8f9388787" ON "hotels_routes" ("route_id") `);
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
        await queryRunner.query(`DROP INDEX "public"."IDX_1e327a22da753ad4b8f9388787"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_13cf17324c3f4d35ee211b58f0"`);
        await queryRunner.query(`DROP TABLE "hotels_routes"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e8ca363ddad4dfcb5a893d168f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9b32d88aadf4e015bdd30d3c7b"`);
        await queryRunner.query(`DROP TABLE "routes_hotels"`);
    }

}
