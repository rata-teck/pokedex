import { TestBed } from '@angular/core/testing';

import { ObtenerPokemonService } from './obtener-pokemon.service';

describe('ObtenerPokemonService', () => {
  let service: ObtenerPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
