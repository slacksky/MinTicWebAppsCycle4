import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Aeropuerto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  cuidad: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'number',
    required: true,
  })
  coordx: number;

  @property({
    type: 'number',
    required: true,
  })
  coordy: number;

  @property({
    type: 'string',
    required: true,
  })
  siglas: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  constructor(data?: Partial<Aeropuerto>) {
    super(data);
  }
}

export interface AeropuertoRelations {
  // describe navigational properties here
}

export type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
