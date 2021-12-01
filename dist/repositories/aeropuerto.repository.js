"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AeropuertoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AeropuertoRepository = class AeropuertoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rutaRepositoryGetter) {
        super(models_1.Aeropuerto, dataSource);
        this.rutaRepositoryGetter = rutaRepositoryGetter;
        this.arrivRoute = this.createBelongsToAccessorFor('arrivRoute', rutaRepositoryGetter);
        this.registerInclusionResolver('arrivRoute', this.arrivRoute.inclusionResolver);
        this.depRoute = this.createBelongsToAccessorFor('depRoute', rutaRepositoryGetter);
        this.registerInclusionResolver('depRoute', this.depRoute.inclusionResolver);
    }
};
AeropuertoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('RutaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource, Function])
], AeropuertoRepository);
exports.AeropuertoRepository = AeropuertoRepository;
//# sourceMappingURL=aeropuerto.repository.js.map