const cliente = {
    nome:"joao",
    idade:24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("saldo insuficiente!");
        }else{
            this.saldo -= valor;
            console.log(`pagamento realizado, novosaldo e : ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);