import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';
import {RouterModule} from '@angular/router'; //rutas
import {HttpClientModule} from '@angular/common/http';

import {InfoPokemonComponent} from './componentes/info-pokemon/info-pokemon.component';
import {ObtenerPokemonService} from './servicios/obtener-pokemon.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    HttpClientModule,
    PokemonesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesPage, InfoPokemonComponent],
  providers: [
    ObtenerPokemonService
  ]
})
export class PokemonesPageModule {}
