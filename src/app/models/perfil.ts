export class Perfil {
    idPerfil: number;
    nombre: string;
    apellido: string;
    profesion: string;
    resumen: string;
    foto: string;
    email: string;
    domicilio: string;
    telefono: string;
    linkedin: string;
    github: string;
    twitter: string;
    facebook: string;

    constructor(id: number, nombre: string, apellido: string, profesion: string, resumen: string, foto: string, 
                mail: string, dom: string, tel: string, link: string, git: string, tw: string, fb: string){
        this.idPerfil = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.resumen = resumen;
        this.foto = foto;
        this.email = mail;
        this.domicilio = dom;
        this.telefono = tel;
        this.linkedin = link;
        this.github = git;
        this.twitter = tw;
        this.facebook = fb;
    }
}
