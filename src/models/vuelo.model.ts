import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechainic: string;

  @property({
    type: 'string',
    required: true,
  })
  horainic: string;

  @property({
    type: 'date',
    required: true,
  })
  fechafin: string;

  @property({
    type: 'string',
    required: true,
  })
  horafin: string;

  @property({
    type: 'number',
    required: true,
  })
  SeatSold: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrePiloto: string;

  @property({
    type: 'string',
    required: true,
  })
  ruta: string;

  @belongsTo(() => Ruta, {name: 'FlightRoute'})
  Route: string;

  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
