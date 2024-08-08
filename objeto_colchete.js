const cliente = {
    nome:"andre",
    idade: 32,
    cpf:"111222333",
    email:"andre@gmail.com"
};

const chaves = ["nome","idade","cpf","email","altura"];

console.log(`O nome do cliente e ${cliente ["nome"]} e essa pessoa tem ${cliente ["idade"]} anos.`);
console.log(`Os tres primeiros digitos do CPF sao ${cliente.cpf.substring(0,3)}`);

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});