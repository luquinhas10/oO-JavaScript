const cliente = {
    nome:"joao",
    idade:24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"]
};

cliente.enderecos = [
{
    rua:"R. joseph climber",
    numero: 1337,
    apartamento:true,
    complemento:"ap 934",
},
];

function ligaParaCliente(telefoneComercial,telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log( encomenda);