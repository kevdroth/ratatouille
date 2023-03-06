export interface Recetas {
  coordenadas: Coordenadas;
  flotante2: string;
  flotante3: string;
  flotanteMascara: string;
  idReceta: number,
  imgReceta: string;
  ingredientes: Ingredientes[];
  preparacion: Preparacion[];
  qr: string;
  titulo: Titulo,
  videoReceta: string;
}

export interface Coordenadas{
  x: number,
  y: number
}

export interface Data{
  recetas: Recetas[]
}

export interface Titulo{
  text1: string,
  marca1: string,
  text2: string,
  marca2: string,
}

export interface Ingredientes {
  propios: Propios[],
  nopropios: noPropios[],
}

export interface Propios{
  producto: string,
  cantidad: string
}

export interface noPropios{
  producto: string,
  cantidad: string
}

export interface Preparacion {
  paso: string;
  descripcion: string;
  receta_id: string;
}

export interface Marcas{
  nombre: string,
  redes: string,
  slug: string,
  logo: string
}