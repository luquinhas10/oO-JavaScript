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

cliente.enderecos.push({
    rua: "R. joseph ladder",
    numero:404,
    apartamento:false,
});

const listadeApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listadeApenasApartamentos);