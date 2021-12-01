import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Vuelo, VueloRelations, Ruta } from '../models';
import { RutaRepository } from './ruta.repository';
export declare class VueloRepository extends DefaultCrudRepository<Vuelo, typeof Vuelo.prototype.ID, VueloRelations> {
    protected rutaRepositoryGetter: Getter<RutaRepository>;
    readonly FlightRoute: BelongsToAccessor<Ruta, typeof Vuelo.prototype.ID>;
    constructor(dataSource: MongoDataSource, rutaRepositoryGetter: Getter<RutaRepository>);
}
