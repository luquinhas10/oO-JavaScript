const cliente = {
    nome :"João",
    idade: 24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"],
};

cliente.enderecos = [
{
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "ap 934",                
},
];

const chavesDoObjetos = Object.keys(cliente);

console.log(chavesDoObjetos);
if (!chavesDoObjetos.includes("endereços")){
    console.error("Erro. É necessário ter um cadastro de endereço") 
}