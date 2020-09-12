"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* =========== OBTENER OBJETOS HTML =========== */
var imprimeImpuesto = document.getElementById('imprimeImpuesto');
var cli_nombre = document.getElementById('cli_nombre');
var cli_monto = document.getElementById('cli_monto');
var cli_deducciones = document.getElementById('cli_deducciones');
/* ===== CALCULAR IMPUESTO ======== */

imprimeImpuesto.addEventListener('click', function (event) {
  event.preventDefault();

  if (cli_nombre.value && cli_monto.value && cli_monto.value > 0 && !isNaN(cli_monto.value) && cli_deducciones.value && cli_deducciones.value > 0 && !isNaN(cli_deducciones.value)) {
    cli_nombre.style.borderColor = "green";
    cli_monto.style.borderColor = "green";
    cli_deducciones.style.borderColor = "green";
    var i1 = new _impuestos["default"](cli_monto.value, cli_deducciones.value);
    var c1 = new _cliente["default"](cli_nombre.value, i1);
    document.getElementById("resultadoImpuesto").innerHTML = "\n            <h3>LISTO!</h3>\n            <h3>Tu cliente se llama ".concat(c1.nombre(), "</h3>\n            <h4>Su Monto Bruto Anual es de $ ").concat(c1.impuesto().monto_bruto_anual(), "</h4>\n            <h4>Sus Deducciones son de $ ").concat(c1.impuesto().deducciones(), "</h4>\n            <h3>Su total de impuestos a pagar son de $ ").concat(c1.calcularImpuesto(), "</h3>\n        ");
  } else {
    cli_nombre.style.borderColor = "red";
    cli_monto.style.borderColor = "red";
    cli_deducciones.style.borderColor = "red";
  }
});