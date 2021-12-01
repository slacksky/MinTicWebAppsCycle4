import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Vuelo, VueloRelations, Ruta} from '../models';
import {RutaRepository} from './ruta.repository';

export class VueloRepository extends DefaultCrudRepository<
  Vuelo,
  typeof Vuelo.prototype.ID,
  VueloRelations
> {

  public readonly FlightRoute: BelongsToAccessor<Ruta, typeof Vuelo.prototype.ID>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RutaRepository') protected rutaRepositoryGetter: Getter<RutaRepository>,
  ) {
    super(Vuelo, dataSource);
    this.FlightRoute = this.createBelongsToAccessorFor('FlightRoute', rutaRepositoryGetter,);
    this.registerInclusionResolver('FlightRoute', this.FlightRoute.inclusionResolver);
  }
}
