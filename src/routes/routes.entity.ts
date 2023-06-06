import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Hotel } from '../hotels/hotels.entity';

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  duration: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToMany(() => Hotel, (hotel) => hotel.id)
  @JoinTable({
    name: 'routes_hotels',
    joinColumn: {name: 'route_id'},
    inverseJoinColumn: {name: 'hotel_id'}
  })
  hotels: Hotel[];
}