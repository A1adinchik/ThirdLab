import { Module } from '@nestjs/common';
import { HotelsModule } from './hotels/hotels.module'
import { DatasourceModule } from "./datasource/datasource.module";
import { RoutesModule } from "./routes/routes.module";
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [RoutesModule,
    DatasourceModule,
    HotelsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      host: 'localhost',
      synchronize: true,
      logging: 'all',
      entities: ['dist/**/*.entity{.ts,.js}'],
    })],
  controllers:[],
  providers:[],
})
export class AppModule {}