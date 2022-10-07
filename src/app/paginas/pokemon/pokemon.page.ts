import { Component, OnInit } from '@angular/core';
import {ObtenerPokemonService} from './../../servicios/obtener-pokemon.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  public nombrePokemon! : string;
  constructor(
    public pokebola : ObtenerPokemonService,
    private ruta : ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokebola.obtenerPokemon(this.ruta.snapshot.params.nombrePokemon);
  }

}
