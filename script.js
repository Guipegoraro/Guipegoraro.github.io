// Calculo gasolina vs alcool
// adicionar erro se faltarem números
function gasOuAlc() {
    let consumoAlcool = Number(document.getElementById('consumoAlcool').value);
    let consumoGasolina = Number(document.getElementById('consumoGasolina').value);
    let valorAlcool = Number(document.getElementById('valorAlcool').value);
    let valorGasolina = Number(document.getElementById('valorGasolina').value);
    let valorAbastecer = Number(document.getElementById('valorAbastecer').value); 
    var abastecerResultado = "test";

    let litrosAlcool = Number(valorAbastecer) / Number(valorAlcool);
    let litrosGasolina = Number(valorAbastecer) / Number(valorGasolina);
    console.log(`com R$${valorAbastecer} você abastece ${litrosAlcool.toFixed(2)} litros de alcool e ${litrosGasolina.toFixed(2)} litros de gasolina.`);

    let rodagemAlcool = litrosAlcool * Number(consumoAlcool);
    let rodagemGasolina = litrosGasolina * Number(consumoGasolina);
    if (rodagemAlcool > rodagemGasolina){
    console.log(`Alcool está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`);
    abastecerResultado = `Alcool está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`;
    document.getElementById('consumoResultado').innerHTML = abastecerResultado;
}
    else{
    console.log(`Gasolina está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`)
    abastecerResultado = `Gasolina está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`
    document.getElementById('consumoResultado').innerHTML = abastecerResultado;
}
}

// Calculadora de Juros composto

function juroscompcalc() {
    let valorInicial = +prompt("Entre o valor a ser investido:");
    let rendimento = +prompt("Entre o valor em porcentagem de rendimento por período") / 100 + 1;
    let aporte = +prompt("Entre o aporte:");
    let periodo = +prompt("Entre o número de períodos:")
    let valorFinal = 0;
    let i = 1

    valorFinal = Number(valorInicial * rendimento + aporte);
    console.log(`Após 1 período o valor é de R$${valorFinal}`);

    while (i < periodo){
    ++i;
    valorFinal = Number(valorFinal * rendimento + aporte);
    console.log(`Após ${i} períodos o valor é de R$${valorFinal.toFixed(2)}`);
    // terminar implementação

    }}