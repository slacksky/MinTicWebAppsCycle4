import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ruta, RutaRelations, Aeropuerto } from '../models';
import { AeropuertoRepository } from './aeropuerto.repository';
export declare class RutaRepository extends DefaultCrudRepository<Ruta, typeof Ruta.prototype.ID, RutaRelations> {
    protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>;
    readonly DepAirport: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.ID>;
    readonly ArrivAirport: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.ID>;
    constructor(dataSource: MongoDataSource, aeropuertoRepositoryGetter: Getter<AeropuertoRepository>);
}
