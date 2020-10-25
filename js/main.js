// // ******************* AULA 5 - Manipulando elementos

function clicou(){
   alert("Obrigado por clicar");
}

function clicou2(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
        //window.open("http://www.google.com.br");
        window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";

}  

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value) // coleta os valores 
}


// function trocar(){
//         document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";

// }

// function voltar(){
//         document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

// }  

// ******************* AULA 4 - Funções 


/* var validar = 0;
function validaIdade(idade){
    if (idade >= 18){   
        validar = true
    }else{
        validar = false
    }
    return validar;
}

    var idade = prompt("Qual sua idade");
    validaIdade(idade);
    console.log(validar);
*/

// function soma(n1,n2){
//     return n1 + n2;
// }

// function setReplace(frase,nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }
// alert(soma(5,10));
// alert(setReplace("Vai Japão", "Japão","Brasil"));


// var d = new Date;
// console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));
// alert("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));

// ******************* AULA 3 - Condicionais, laçõs de repetição e Date  


// var idade = prompt("Qual sua idade?")
// if (idade >= 18){
//     alert("maior de idade")
// }else{
//     alert("menor de idade")
// };

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     count++;
// }

// var d = new Date();
// alert(d);
// alert(d.getMonth());
// alert(d.getMinutes());
// alert(d.getDay())
// alert(d.getHours())



// ******************* Arrays e Dicionário - AULA 2 ****************

// var frutas = [{nome:"maça", cor: "vermelha"},{nome:"uva",cor: "roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);

/* ****dicionário****
var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

// var lista = ["maça","pera","laranja"];
// lista.push("uva");
// //lista.pop();
// console.log(lista);
// console.log(lista.lenght);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - "))

// *******************  Introdução AULA 1


// var nome = "Nicolas Vogiantzis";
// var idade = 23;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo"
// //alert("Bem Vindo " + nome + idade);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão","Brasil"));

