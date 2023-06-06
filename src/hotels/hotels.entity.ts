import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Route } from '../routes/routes.entity';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToMany(() => Route, route => route.hotels)
  @JoinTable({
    name: 'hotels_routes',
    joinColumn: {name: 'hotel_id'},
    inverseJoinColumn: {name: 'route_id'},
  })
  routes: Route[];
}