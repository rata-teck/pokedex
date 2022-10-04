export type Info = {
  name : string,
  url : string
}

export interface Peticion {
  count : number,
  next? : string,
  previous? : string,
  results : Array<Info>
}
