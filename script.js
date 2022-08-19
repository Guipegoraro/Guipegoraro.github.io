// Calculo gasolina vs alcool
function gasOuAlc(consumoAlcool, consumoGasolina, valorAlcool, valorGasolina, valorAbastecer) {
    var consumoAlcool = Number(document.getElementById('consumoAlcool').value);
    var consumoGasolina = Number(document.getElementById('consumoGasolina').value);
    var valorAlcool = Number(document.getElementById('valorAlcool').value);
    var valorGasolina = Number(document.getElementById('valorGasolina').value);
    var valorAbastecer = Number(document.getElementById('valorAbastecer').value); 
    var abastecerResultado = "test";

    var litrosAlcool = Number(valorAbastecer) / Number(valorAlcool);
    var litrosGasolina = Number(valorAbastecer) / Number(valorGasolina);
    console.log(`com R$${valorAbastecer} você abastece ${litrosAlcool.toFixed(2)} litros de alcool e ${litrosGasolina.toFixed(2)} litros de gasolina.`);

    var rodagemAlcool = litrosAlcool * Number(consumoAlcool);
    var rodagemGasolina = litrosGasolina * Number(consumoGasolina);
    if (rodagemAlcool > rodagemGasolina){
    console.log(`Alcool está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`);
    abastecerResultado = `Alcool está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`;
    }
    else{
    console.log(`Gasolina está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`)
    abastecerResultado = `Gasolina está valendo mais! você roda ${rodagemAlcool.toFixed(2)}km no alcool e ${rodagemGasolina.toFixed(2)}km rodando na gasolina!`
    document.getElementById('consumoResultado').innerHTML = abastecerResultado;
}
}