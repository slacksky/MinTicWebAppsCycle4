import { Entity } from '@loopback/repository';
export declare class Ruta extends Entity {
    ID?: string;
    origen: string;
    destino: string;
    tiempoest: string;
    Departure: string;
    Arrival: string;
    constructor(data?: Partial<Ruta>);
}
export interface RutaRelations {
}
export declare type RutaWithRelations = Ruta & RutaRelations;
