import {Module} from "@nestjs/common";
import {Route} from "./routes.entity";
import {RoutesService} from "./routes.service";
import {RoutesController} from "./routes.controller";
import {DatasourceModule} from "../datasource/datasource.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";

@Module({
        controllers: [RoutesController],
        providers: [RoutesService],
        imports: [DatasourceModule,
        TypeOrmModule.forFeature([Route, User])],
    })
export class RoutesModule{}