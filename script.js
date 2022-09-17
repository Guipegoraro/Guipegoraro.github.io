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

// Calculadora de Juros composto

function juroscompcalc() {
    let valorInicial =  Number(document.getElementById('valorInicial').value);
    let rendimento =  Number(document.getElementById('rendimento').value) / 100;
    let aporte =  Number(document.getElementById('aporte').value);
    let periodo =  Number(document.getElementById('periodo').value);
    let valorFinal = 0;
    let i = 1;
    let registroResultado = [];


    valorFinal = valorInicial * (1 + rendimento) + aporte;
    console.log(`Após 1 período o valor é de R$${valorFinal}`);
    registroResultado.push(`Após 1 período o valor é de R$${valorFinal}`);

    while (i < periodo){
    ++i;
    valorFinal = valorFinal * (1 + rendimento) + aporte;
    valorRegistro = valorFinal.toFixed(2);
    registroResultado.push(`Após ${i} períodos o valor é de R$${valorRegistro}`);
    }
    console.log(registroResultado);
    document.getElementById(`jurosResultado`).innerHTML = registroResultado.join("<br>");

}}