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
}
