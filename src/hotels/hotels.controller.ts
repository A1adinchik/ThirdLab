import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Hotel } from "./hotels.entity";
import { HotelService } from "./hotels.service";

@Controller('hotel')
export class HotelController {
    constructor(private readonly hotelService: HotelService) {}
    
    @Get()
    findAll()
    {
        return this.hotelService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string)
    {
        return this.hotelService.findOne(+id);
    }

    @Put(":id")
    update(@Param("id") id: string,@Body() updateHotel: Hotel)
    {
        return this.hotelService.update(+id, updateHotel);
    }

    @Post()
    create(@Body() createHotel: Hotel)
    {
        return this.hotelService.create(createHotel);
    }
    
    @Delete(":id")
    remove(@Param("id") id: string)
    {
        return this.hotelService.remove(+id);
    }

    @Get('incomplete')
    findIncomplete()
    {
        this.hotelService.findIncomplete();
    }
}