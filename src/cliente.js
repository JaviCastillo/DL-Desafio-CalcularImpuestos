export default class Cliente{
    constructor(nombre, impuesto){
        this._nombre = () => nombre;
        this._impuesto = () => impuesto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevo_nombre){
        this._nombre = () => nuevo_nombre;
    }

    get impuesto(){
        return this._impuesto;
    }

    set impuesto(nuevo_impuesto){
        this._impuesto = () => nuevo_impuesto;
    }

    calcularImpuesto(){
        return ((this.impuesto().monto_bruto_anual() - this.impuesto().deducciones()) * 0.21)
    }
}