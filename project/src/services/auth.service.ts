import {injectable, /* inject, */ BindingScope} from '@loopback/core';

const generator = require("password-generator");
const criptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
//generar y retornar la clave 
   GenerarClave(){
     let clave = generator(8, false);
     return clave;
   }
//cifrar clave
   CifrarClave(clave: string){
    let claveCifrada = criptoJS.MD5(clave).toString();
    return claveCifrada;
  }
}
