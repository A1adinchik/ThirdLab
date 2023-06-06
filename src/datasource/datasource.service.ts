import {Injectable} from "@nestjs/common";
import {Route} from "../routes/routes.entity";
import {Hotel} from "../hotels/hotels.entity";
import {User} from "../users/users.entity";

@Injectable()
export class DatasourceService
{
    private routes: Route[] = [];
    getRoutes(): Route[]
    {
        return this.routes
    }

    private hotel: Hotel[] = [];
    getHotel(): Hotel[]
    {
        return this.hotel
    }
    
    private users: User[] = [];
    getUsers(): User[]
    {
        return this.users;
    }
}