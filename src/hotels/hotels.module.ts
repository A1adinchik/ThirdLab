import {Module} from "@nestjs/common";
import { HotelController } from "./hotels.controller";
import { HotelService } from "./hotels.service";
import { DatasourceModule } from "../datasource/datasource.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Route } from "src/routes/routes.entity";
import { Hotel } from "./hotels.entity";
import { User } from "src/users/users.entity";

@Module(
    {
        controllers: [HotelController],
        providers: [HotelService],
        imports:[DatasourceModule,
        TypeOrmModule.forFeature([Hotel, User])]
    }
)
export class HotelsModule{}