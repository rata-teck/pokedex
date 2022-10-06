import { Component, OnInit } from '@angular/core';
import {ObtenerPokemonService} from './../pokemones/servicios/obtener-pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  public nombrePokemon! : string;
  constructor(
    public pokebola : ObtenerPokemonService,
    public ruta : ActivatedRoute
  ) { }

  ngOnInit() {
    this.ruta.params.subscribe(data => {
      this.nombrePokemon = data[1];
    })
    this.pokebola.obtenerPokemon(this.nombrePokemon);
  }

}
