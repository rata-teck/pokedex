import { Component, OnInit, ViewChild } from '@angular/core';
import {ObtenerPokemonService} from './servicios/obtener-pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { Info } from 'src/app/modelo/peticion';
//import {Peticion, Info} from './../../modelo/peticion';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) public bosLaiyir:IonInfiniteScroll;
  public formulario: FormGroup;
  constructor(
    public obtenerPokemon: ObtenerPokemonService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // Compatible con validaciones
    this.formulario = this.formBuilder.group({
      // variable: new FormControl(valor, sync, async);
      nombrePokemon: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])
    })
    this.obtenerPokemon.obtener20primeros();
  }
  public cargarMasPokemones(event:Event):void{
    this.obtenerPokemon.obtenetMasPokemones();
    this.bosLaiyir.complete();
  }

}
