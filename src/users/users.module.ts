import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {DatasourceModule} from "../datasource/datasource.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity";

@Module(
    {
        controllers:[UsersController],
        providers:[UsersService],
        imports:[DatasourceModule,
        TypeOrmModule.forFeature([User])],
    }
)
export class UsersModule{}