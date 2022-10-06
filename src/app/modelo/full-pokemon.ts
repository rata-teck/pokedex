type Ability2 = {
  name : string,
  url : string
}
type Ability1 = {
  ability : Ability2,
  is_hidden : boolean,
  slot : number
}
type Form = {
  name : string,
  url : string
}
type GameIndexVersion = {
  name : string,
  url : string
}
type GameIndex = {
  game_index : number,
  version : GameIndexVersion
}
type HeldItem2 = {
  name : string,
  url : string
}
type HeldItemVersion = {
  name : string,
  url : string
}
type HeldItemVersionDetail = {
  rarity : number,
  version : HeldItemVersion
}
type HeldItem = {
  item : HeldItem2,
  version_details : HeldItemVersionDetail
}
type Move2 = {
  name : string,
  url : string
}
type MoveLearnMethod = {
  name : string,
  url : string
}
type MoveVersionGroup = {
  name : string,
  url : string
}
type MoveVersionGroupDetails = {
  level_learned_at : number,
  move_learn_method : MoveLearnMethod,
  version_group : MoveVersionGroup
}
type Move = {
  move : Move2,
  version_group_details : MoveVersionGroupDetails
}
type Specie = {
  name : string,
  url : string
}
type Sprites = {
  front_default : string,
  front_female : string,
  front_shiny : string,
  front_shiny_female : string
}
export interface FullPokemon {
  abilities: Array<Ability1>,
  base_experience: number,
  forms: Array<Form>,
  game_indices: Array<GameIndex>,
  height: number,
  held_items: Array<HeldItem>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<Move>,
  name: string,
  order: number,
  species: Specie,
  sprites: Sprites,
  "stats": [
    {
      "base_stat": 48,
      "effort": 1,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 48,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
  "weight": 40
}