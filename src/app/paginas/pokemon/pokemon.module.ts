import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';

import {ObtenerPokemonService} from  './../../servicios/obtener-pokemon.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [PokemonPage],
  providers: [
    ObtenerPokemonService
  ]
})
export class PokemonPageModule {}
