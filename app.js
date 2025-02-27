let name = prompt("Qual seu nome?");
let age = prompt("Quantos anos você tem?");
let language = prompt("Qual linguagem de programação está estudando?");

console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);

let choice = prompt(`Você gostaria de estudar ${language}? Responda como [1] para SIM e [2] para NÃO.`);

while (choice != '1' && choice != '2'){
    console.log(`Opção inválida escolha 1 para SIM e 2 para NÃO.`);
    choice = prompt(`Por vafor, escolha entre as opções 1 e 2.`)
}
if (choice == '1'){
    console.log(`Muito bom! Continue estudando e você terá muito sucesso.`);
}
else if (choice == '2'){
    console.log(`Ahh que pena... Já tentou aprender outras linguagens?`);
}
