"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vuelo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const ruta_model_1 = require("./ruta.model");
let Vuelo = class Vuelo extends repository_1.Entity {
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
], Vuelo.prototype, "ID", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "fechainic", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "horainic", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "fechafin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "horafin", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vuelo.prototype, "SeatSold", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "nombrePiloto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "ruta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => ruta_model_1.Ruta, { name: 'FlightRoute' }),
    (0, tslib_1.__metadata)("design:type", String)
], Vuelo.prototype, "Route", void 0);
Vuelo = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Vuelo);
exports.Vuelo = Vuelo;
//# sourceMappingURL=vuelo.model.js.map