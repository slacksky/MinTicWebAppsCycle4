import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import axios from 'axios';

const generator = require("password-generator");
const criptoJS = require("crypto-js");

import {config} from '../config/config';
import {Usuario} from '../models';
const jwt = require('jsonwebtoken');
import {UsuarioRepository} from '../repositories';
import {repository} from '@loopback/repository';


@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(@repository(UsuarioRepository)
  public usuarioRepository: UsuarioRepository,) {}

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
//JWT
  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre + " " + usuario.apellidos
      }
    }, config.claveJWT)
 
    return token
  }

  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, config.claveJWT);
      return datos;
    } catch (error) {
      return false;
    }
  }


//Autenticacion
IdentificarPersona(correo: string, password: string) {
  try {
    let p = this.usuarioRepository.findOne({where: {correo: correo, password: password}})
    if (p) {
      return p;
    }
    return false;
  } catch {
    return false;
  }
}


}
