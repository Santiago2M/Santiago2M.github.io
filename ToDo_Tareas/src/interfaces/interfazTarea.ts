import { Estado } from "../enum/estadosEnum";
export interface Tarea {
    id:number,
	completada:boolean,
	fechaInicio:Date,
	fechaFin:Date|null,
	descripcion:string,
	estado: Estado,
    titulo: string,
}