import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Peticion, Info} from './../../../modelo/peticion';
import {Pokemon} from './../../../modelo/pokemon';
@Injectable()
export class ObtenerPokemonService {
  private url : string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  public resultado!: Peticion;
  public arrayInfo : Array<Info> = [];
  constructor(
    private cliente: HttpClient
  ) { }

  public obtener20primeros(){
    this.cliente.get<Peticion>(this.url).subscribe(peticion => {
      this.resultado = peticion;
      this.arrayInfo.push(...peticion.results);
    });
  }

  public obtenetMasPokemones(){
    this.cliente.get<Peticion>(this.resultado.next).subscribe(peticion => {
      //this.resultado.next = peticion.next;
      this.resultado = peticion;
      this.arrayInfo.push(...peticion.results);
    });
  }
}
