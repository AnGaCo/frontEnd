export class Estudio {
    idEstudio: number;
    institucion: string;
    logo: string;
    titulo: string;
    entrada: string;
    salida: string;

    constructor(id: number, nombre: string, logo: string, titulo: string, entrada: string, salida: string){
        this.idEstudio = id;
        this.institucion = nombre;
        this.logo = logo;
        this.titulo = titulo;
        this.entrada = entrada;
        this.salida = salida;
    }
}
