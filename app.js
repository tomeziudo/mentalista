function Chutar(){
    // sortear um número aleatório secreto
    let numeroSecreto = 3

    // pegar o número digitado e converter para inteiro
    let chute = parseInt(document.querySelector("#valor").value)
    console.log(numeroSecreto , chute)

// comparar o número digitado com o número aleatório secreto
if(numeroSecreto == chute){
    // se tiver coreto e os números foram iguais, mostrar a mensagem que a pessoa acertou
    document.querySelector(".resultado").innerHTML = "Você acertou"
}
else
{
    // se tiver errado e os números forem diferentes, mostrar que a pessoa errou
    document.querySelector(".resultado").innerHTML = "Você errou"
}

}