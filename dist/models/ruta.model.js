"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const aeropuerto_model_1 = require("./aeropuerto.model");
let Ruta = class Ruta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "ID", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "origen", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "destino", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "tiempoest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => aeropuerto_model_1.Aeropuerto, { name: 'DepAirport' }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "Departure", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => aeropuerto_model_1.Aeropuerto, { name: 'ArrivAirport' }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "Arrival", void 0);
Ruta = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Ruta);
exports.Ruta = Ruta;
//# sourceMappingURL=ruta.model.js.map