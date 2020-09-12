import Cliente from  "./cliente.js";
import Impuestos from "./impuestos.js";

/* =========== OBTENER OBJETOS HTML =========== */

var imprimeImpuesto = document.getElementById('imprimeImpuesto');
var cli_nombre = document.getElementById('cli_nombre');
var cli_monto = document.getElementById('cli_monto');
var cli_deducciones = document.getElementById('cli_deducciones');

/* ===== CALCULAR IMPUESTO ======== */

imprimeImpuesto.addEventListener('click', (event) => {
    event.preventDefault();

    if( cli_nombre.value &&
        cli_monto.value && cli_monto.value>0 && !isNaN(cli_monto.value) && 
        cli_deducciones.value && cli_deducciones.value>0 && !isNaN(cli_deducciones.value)){

        cli_nombre.style.borderColor = "green";
        cli_monto.style.borderColor = "green";
        cli_deducciones.style.borderColor = "green";

        let i1 = new Impuestos(cli_monto.value, cli_deducciones.value);
        let c1 = new Cliente(cli_nombre.value, i1);

        document.getElementById("resultadoImpuesto").innerHTML = `
            <h3>LISTO!</h3>
            <h3>Tu cliente se llama ${c1.nombre()}</h3>
            <h4>Su Monto Bruto Anual es de $ ${c1.impuesto().monto_bruto_anual()}</h4>
            <h4>Sus Deducciones son de $ ${c1.impuesto().deducciones()}</h4>
            <h3>Su total de impuestos a pagar son de $ ${c1.calcularImpuesto()}</h3>
        `;
    }else{
        cli_nombre.style.borderColor = "red";
        cli_monto.style.borderColor = "red";
        cli_deducciones.style.borderColor = "red";
    }    
});
