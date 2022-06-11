let idade = 18;
let humano = true;
let mesDeAniversario = "dezembro";
let nome = "Roberto";
let sobrenome = "Carloss"

if(idade > 18){
    console.log(`Você possui ${idade} anos e tem idade superior a 18 anos`);
} else {
    console.log(`Você possui ${idade} anos e sua idade não é superior a 18 anos`);
}

if( idade >= 18 && humano == true){
    console.log("Você e humano é maior de idade!!");
}
if( mesDeAniversario == "janeiro" || mesDeAniversario =="dezembro"){
    console.log(`O seu aniversário e comemorado em ${mesDeAniversario}`);
}
if(nome[0] == "r" || nome[0]=="R"){
    console.log(`O seu nome começa com a letra ${nome[0]}`);
} 
if(sobrenome.length > 6 || sobrenome[0] == "e" || sobrenome[0] =="E"){
    console.log("Seu sobrenome tem mais de 6 caracteres ou começa com a letra E")
}
