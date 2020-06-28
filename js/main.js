function clicou() {
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
 function redirecionar() {
     //window.open("https://digitalinnovation.one/bootcamps/fullstack-developer-banco-carrefour");
     window.location.href = "https://digitalinnovation.one/bootcamps/fullstack-developer-banco-carrefour";
 }

 function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML="<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML="<b>Obrigado por passar o mouse</b>";
 }

 function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML="Passe o mouse aqui"
 }
function load() {
        alert("Pagina Carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.valuegit);
    
}

/*function soma(n1,n2) {
    return n1 + n2
}
function setReplace(frase,nome,novo_nome) {
    return frase.replace(nome,novo_nome)
}

function validaIdade(idade) {
    var idade;
    if (idade>=18) {
        validar = true            
    } else {
        validar = false
    }
    return validar
}
//var idade = prompt("Qual é a sua idade ?")
//console.log(validaIdade(idade));

//alert(soma(5,10))
//alert(setReplace("Vai Japão","Japão","Brasil"))
/*
var d = new Date();
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count;
for ( count = 0; count <= 5; count++) {
    alert(count);
}
*/
/*
var count = 0;
while (count<5) {
    console.log(count);
    count++;
}
*/
/*
var idade = prompt("Qual é a sua idade:")
if (idade>=18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}
*/
/*
var frutas = [{nome:"Maçã",cor:"Vermelha"},{nome:"Uva",cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome)
*/

/*
var fruta = {nome:"Maçã",cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/

//var lista = ["Maçã","Pêra","Laranja"];
//lista.push("uva");
//lista.pop();
//lista.reverse();
//console.log(lista.length);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//console.log(lista[1]);
//alert(lista[1])

//var nome = "Breno Piloto"
//var idade = 25;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert( nome + " tem " + idade + " anos");
//alert(idade+idade2)
//console.log(nome);
//console.log(idade + idade2)
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());

//alert(frase.replace("Japão","Brasil"));
