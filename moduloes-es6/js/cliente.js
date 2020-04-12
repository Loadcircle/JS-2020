//algo exportado no estara disponible directamente, debe importarse
export const nombreCliente = 'Juan';
export let ahorro = 200

export function mostrarInfo(nombre, ahorro){
    return `Cliente: ${nombre}, ahorro: ${ahorro}`
}


export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre,
        this.ahorro = ahorro
    }
}