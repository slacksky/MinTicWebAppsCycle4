import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Aeropuerto, AeropuertoRelations, Ruta} from '../models';
import {RutaRepository} from './ruta.repository';

export class AeropuertoRepository extends DefaultCrudRepository<
  Aeropuerto,
  typeof Aeropuerto.prototype.ID,
  AeropuertoRelations
> {

  public readonly depRoute: BelongsToAccessor<Ruta, typeof Aeropuerto.prototype.ID>;

  public readonly arrivRoute: BelongsToAccessor<Ruta, typeof Aeropuerto.prototype.ID>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('RutaRepository') protected rutaRepositoryGetter: Getter<RutaRepository>,
  ) {
    super(Aeropuerto, dataSource);
    this.arrivRoute = this.createBelongsToAccessorFor('arrivRoute', rutaRepositoryGetter,);
    this.registerInclusionResolver('arrivRoute', this.arrivRoute.inclusionResolver);
    this.depRoute = this.createBelongsToAccessorFor('depRoute', rutaRepositoryGetter,);
    this.registerInclusionResolver('depRoute', this.depRoute.inclusionResolver);
  }
}
