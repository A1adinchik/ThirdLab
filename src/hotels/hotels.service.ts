import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from '../users/users.entity'
import { Hotel } from "./hotels.entity";
import { CreateHotelDto } from "./dto/HotelDTO";
import { IncompleteHotelDTO } from "./dto/IncompleteHotelDTO"


@Injectable()
export class HotelService
{
    constructor(@InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
    @InjectRepository(User)
    private readonly routeRepository: Repository<User>) {}

    async create(hotelDto: CreateHotelDto): Promise<Hotel>
    {
        const hotel = this.hotelRepository.create();
        hotel.name = hotelDto.name;
        hotel.location = hotelDto.location;
        hotel.description = hotelDto.description;
        hotel.price = hotelDto.price;
        await this.hotelRepository.save(hotel);
        return hotel;
    }
    
    findOne(id:number)
    {
        return this.hotelRepository.findOne({
            where: {id},
        })
    }

    async findAll() : Promise<Hotel[]>
    {
        const hotel = await this.hotelRepository.find({

        })
        return hotel;
    }

    async update(id: number, updateHotel: Hotel)
    {
        const hotel = await this.hotelRepository.findOne({where:{id}});
        hotel.name = updateHotel.name;
        hotel.location = updateHotel.location;
        hotel.description = updateHotel.description;
        hotel.price = updateHotel.price;
        await this.hotelRepository.save(hotel);
        return hotel;
    }
    
    remove(id: number)
    {
        this.hotelRepository.delete({id});
    }

    async findIncomplete(): Promise<IncompleteHotelDTO[]> {
        const hotels = await this.hotelRepository.find();
        const incompleteHotel : IncompleteHotelDTO[] = hotels.map((hotel) => {
            const incompleteHotel = new IncompleteHotelDTO();
            incompleteHotel.name = hotel.name;
            incompleteHotel.description = hotel.description;
            return incompleteHotel;
        });
        return incompleteHotel;
    }
}
