import { Entity } from '@loopback/repository';
export declare class Aeropuerto extends Entity {
    ID?: string;
    nombre: string;
    cuidad: string;
    pais: string;
    coordx: number;
    coordy: number;
    siglas: string;
    tipo: string;
    constructor(data?: Partial<Aeropuerto>);
}
export interface AeropuertoRelations {
}
export declare type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
