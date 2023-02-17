export interface Recetas {
  nombre: string;
  foto: string;
  ingredientes: Ingredientes[];
  preparacion: Preparacion[];
}

export interface Producto {
  marca: string;
  slug: string;
  logo: string;
  receta: Recetas[];
}

export interface Ingredientes {
  nombre: string;
}

export interface Preparacion {
  nombre: string;
}

