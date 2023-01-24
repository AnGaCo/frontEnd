export class Experiencia {
    idExp: number;
    puesto: string;
    lugar: string;
    logo_empresa: string;
    inicio: string;
    fin: string;
    descripcion: string;

    constructor(id: number, puesto: string, lugar: string, logo: string, inicio: string, fin: string, desc: string){
        this.idExp = id;
        this.puesto = puesto;
        this.lugar = lugar;
        this.logo_empresa = logo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = desc;
    }
}
