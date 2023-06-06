import { Injectable } from "@nestjs/common";
import {Route} from "./routes.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRouteDto } from '../routes/dto/RouteDTO'
import { IncompleteRouteDto } from './dto/IncompleteRouteDto'

@Injectable()
export class RoutesService
{
    constructor(@InjectRepository(Route)
    private readonly routeRepository: Repository<Route>) {}

    async create(routeDto: CreateRouteDto): Promise<Route>
    {
        const route = this.routeRepository.create();
        route.fullName = routeDto.fullName;
        route.duration = routeDto.duration;
        route.description = routeDto.description;
        route.price = routeDto.price;
        await this.routeRepository.save(route);
        return route;
    }
    
    findOne(id:number)
    {
        return this.routeRepository.findOne({
            where: {id},
        })
    }

    async findAll() : Promise<Route[]>
    {
        const route = await this.routeRepository.find({

        })
        return route;
    }

    async update(id: number, updateRoute: Route)
    {
        const route = await this.routeRepository.findOne({where:{id}});
        route.fullName = updateRoute.fullName;
        route.duration = updateRoute.duration;
        route.description = updateRoute.description;
        route.price = updateRoute.price;
        await this.routeRepository.save(route);
        return route;
    }
    
    remove(id: number)
    {
        this.routeRepository.delete({id});
    }

    async findIncomplete(): Promise<IncompleteRouteDto[]> {
        const routes = await this.routeRepository.find();
        const incompleteRoute : IncompleteRouteDto[] = routes.map((route) => {
            const incompleteRoute = new IncompleteRouteDto();
            incompleteRoute.fullName = route.fullName;
            incompleteRoute.description = route.description;
            return incompleteRoute;
        });
        return incompleteRoute;
    }
}
