import {RoutesService} from "./routes.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Route} from "./routes.entity";

@Controller('routes')
export class RoutesController {
    constructor(private readonly routesService: RoutesService) {}
    
    @Get()
    findAll()
    {
        return this.routesService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string)
    {
        return this.routesService.findOne(+id);
    }

    @Put(":id")
    update(@Param("id") id: string,@Body() updateRoute: Route)
    {
        return this.routesService.update(+id, updateRoute);
    }

    @Post()
    create(@Body() createRoute: Route)
    {
        return this.routesService.create(createRoute);
    }
    
    @Delete(":id")
    remove(@Param("id") id: string)
    {
        return this.routesService.remove(+id);
    }

    @Get('incomplete')
    findIncomplete()
    {
        this.routesService.findIncomplete();
    }
}