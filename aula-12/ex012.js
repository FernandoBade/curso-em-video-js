var horaCerta = new Date()
var minutos = new Date()
var relogio = horaCerta.getHours() + minutos.getMinutes()
console.log(`A hora exata é ${horaCerta.getHours()}:${minutos.getMinutes()}.`)

if (horaCerta.getHours() < 6){
    console.log("Boa madrugada!");
} else if (horaCerta.getHours() < 12){
    console.log("Bom dia!");
} else if  (horaCerta.getHours() <= 18){
    console.log("Boa tarde!");
} else if (horaCerta.getHours() <= 24){
    console.log("Boa noite!");
}
