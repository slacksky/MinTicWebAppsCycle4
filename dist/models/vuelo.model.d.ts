import { Entity } from '@loopback/repository';
export declare class Vuelo extends Entity {
    ID?: string;
    fechainic: string;
    horainic: string;
    fechafin: string;
    horafin: string;
    SeatSold: number;
    nombrePiloto: string;
    ruta: string;
    Route: string;
    constructor(data?: Partial<Vuelo>);
}
export interface VueloRelations {
}
export declare type VueloWithRelations = Vuelo & VueloRelations;
