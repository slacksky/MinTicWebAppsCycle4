import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Aeropuerto} from '../models';
import {AeropuertoRepository} from './aeropuerto.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.ID,
  RutaRelations
> {

  public readonly DepAirport: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.ID>;

  public readonly ArrivAirport: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.ID>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AeropuertoRepository') protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>,
  ) {
    super(Ruta, dataSource);
    this.ArrivAirport = this.createBelongsToAccessorFor('ArrivAirport', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('ArrivAirport', this.ArrivAirport.inclusionResolver);
    this.DepAirport = this.createBelongsToAccessorFor('DepAirport', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('DepAirport', this.DepAirport.inclusionResolver);
  }
}
