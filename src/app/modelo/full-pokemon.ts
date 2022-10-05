export interface FullPokemon {
    habilities : [
        ability : {
            name : string,
            url : string
        },
        is_hidden : boolean,
        slot : number
    ],
    game_indices : [
        game_index : number,
        version : {
            name : string,
            url : string
        }
    ],
    height : number,
    held_items : [
      item : {
        name : string,
        url : string
      },
      version_details : [
        {
          rarity : number,
          version : {
            name : string,
            url : string
          }
        }
      ]
    ],
    id : number,
    is_default : boolean,
    location_area_encounters : string,
    moves : [
      {
      move : {
        name : string;
        url : string;
      },
      version_group_details : [{
        level_learned_at : number,
        move_learn_method : {
          name : string,
          url : string
        },
        version_group : {
          name : string,
          url : string
        }
      }
    ]
  }
  ]
}
