var nome = prompt("Digite seu nome: ");
var rendaMensal = Number(prompt("Digite sua renda mensal em R$: "));
while (isNaN(rendaMensal) || rendaMensal == 0) {
    rendaMensal = Number(prompt("Digite sua renda mensal em R$: "));
}
var quantDespesas = Number(prompt("Digite a quantidade de despesas: "));
while (isNaN(quantDespesas) || quantDespesas == 0) {
    quantDespesas = Number(prompt("Digite a quantidade de despesas: "));
}
if (quantDespesas < 1) {
    quantDespesas = 1;
} else if (quantDespesas > 5) {
    quantDespesas = 5;
}
var somaDespesas = 0;

for (i = 1; i < (quantDespesas + 1); i++) {
    let despesa = Number(prompt(`Digite o valor da Despesa ${i}`));
    while (isNaN(despesa) || despesa == 0 || despesa < 0) {
        despesa = Number(prompt(`Digite o valor da Despesa ${i}`));
    }
    somaDespesas+=despesa;
}

var sobra = rendaMensal - somaDespesas;
if(sobra>=(rendaMensal*0.3)){
    var classificacao = "Ótimo: boa margem de sobra."
}else{
    var classificacao = "Ok: dá para melhorar a sobra."
}

alert(`Usuário: ${nome}\nRenda: R$${rendaMensal.toFixed(2)}\nTotal de Despesas: R$${somaDespesas.toFixed(2)}\nSobra: R$${sobra.toFixed(2)}\n${classificacao}`)
console.log(`Usuário: ${nome}\nRenda: R$${rendaMensal.toFixed(2)}\nTotal de Despesas: R$${somaDespesas.toFixed(2)}\nSobra: R$${sobra.toFixed(2)}\n${classificacao}`)



