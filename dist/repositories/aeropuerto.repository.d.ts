import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Aeropuerto, AeropuertoRelations, Ruta } from '../models';
import { RutaRepository } from './ruta.repository';
export declare class AeropuertoRepository extends DefaultCrudRepository<Aeropuerto, typeof Aeropuerto.prototype.ID, AeropuertoRelations> {
    protected rutaRepositoryGetter: Getter<RutaRepository>;
    readonly depRoute: BelongsToAccessor<Ruta, typeof Aeropuerto.prototype.ID>;
    readonly arrivRoute: BelongsToAccessor<Ruta, typeof Aeropuerto.prototype.ID>;
    constructor(dataSource: MongoDataSource, rutaRepositoryGetter: Getter<RutaRepository>);
}
