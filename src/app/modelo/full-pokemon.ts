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
type Stat2 = {
  name : string,
  url : string
}
type Stat = {
  base_stat : number,
  effort : number,
  stat : Stat2
}
 type Type2 = {
  name : string,
  url : string
 }
 type Type = {
  slot : number,
  type : Type2
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
  stats : Array<Stat>,
  types : Array<Type>
  weight: number
}
