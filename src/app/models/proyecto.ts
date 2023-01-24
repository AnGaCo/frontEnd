export class Proyecto {
    idProyecto: number;
    nombre: string;
    fecha_realizacion: string;
    descripcion: string;
    enlace_proyecto: string;
    imagen_demo: string;

    constructor(id: number, nombre: string, fecha: string, desc: string, enlace: string, imagen: string){
        this.idProyecto = id;
        this.nombre = nombre;
        this.fecha_realizacion = fecha;
        this.descripcion = desc;
        this.enlace_proyecto = enlace;
        this.imagen_demo = imagen;
    }
}
