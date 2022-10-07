import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Peticion, Info} from './../modelo/peticion';
//import {Pokemon} from './../modelo/pokemon';
import { FullPokemon } from './../modelo/full-pokemon';
@Injectable()
export class ObtenerPokemonService {
  private url1 : string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  private url2 : string = 'https://pokeapi.co/api/v2/pokemon/';
  public resultado!: Peticion;
  public arrayInfo : Array<Info> = [];
  public pokemon : FullPokemon;
  constructor(
    private cliente: HttpClient
  ) { }

  public obtener20primeros(){
    this.cliente.get<Peticion>(this.url1).subscribe(peticion => {
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

  public obtenerPokemon(nombrePokemon : string){
    this.cliente.get<FullPokemon>(this.url2 + nombrePokemon).subscribe(data => {
      this.pokemon = data;
    });
  }
}
