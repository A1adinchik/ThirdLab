import {UsersService} from "./users.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {User} from "./users.entity";

@Controller ("users")
export class UsersController
{
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll()
    {
        return this.usersService.findAll();
    }
    @Get(":id")
    findOne(@Param("id") id: string)
    {
        return this.usersService.findOne(+id);
    }
    @Put(":id")
    update(@Param("id") id: string, @Body() updateUser: User)
    {
        return this.usersService.update(+id, updateUser);
    }
    @Post()
    create(@Body() createUser: User)
    {
        return this.usersService.create(createUser);
    }
    @Delete(":id")
    remove(@Param("id") id: string)
    {
        return this.usersService.remove(+id);
    }
}