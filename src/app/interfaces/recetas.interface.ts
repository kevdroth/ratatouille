export interface Recetas{
    nombre: string
    foto: string
}

export interface Producto{
    marca: string;
    receta: Recetas[]
}