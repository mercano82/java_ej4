

let ahorro = prompt("Ingrese Monto a Ahorrar");
let periodo = prompt("ingrese la cantidad de meses");

let tasa = (0.36/12);
var term4=(1+tasa)
var term3=Math.pow(term4, periodo)
var term2=(term3-1);
var term1=(term2/tasa);
var resultado=(ahorro*term1);


console.log (resultado)

