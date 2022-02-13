
const qtdCartas = perguntarQtdCartas()
const personagens = gerarPersonagensEmbaralhados(qtdCartas)
 renderizarCartasNaTela(personagens)

function perguntarQtdCartas(){
    let nomeJogador = prompt('Bem vindo ao street figher Memory Game Card, qual é o seu nome ?')
    let qtdCartas = parseInt(prompt(`${nomeJogador}, Com quantas cartas você quer jogar ? Escolha de (4) a (14)`)) 
    while(isNaN(qtdCartas) || qtdCartas < 4 || qtdCartas > 14 || (qtdCartas % 2) === 1){
        qtdCartas = parseInt(prompt('Com quantas cartas você quer jogar ? Escolha de (4) a (14)')) 
    }

    return qtdCartas;
}



function gerarPersonagensEmbaralhados(qtdCartas){

const tiposCartas = ['adon', 'cammy', 'chunli', 'ken', 'riu', 'rose', 'sagat']
const cartas = [];

for(let i = 0; i < (qtdCartas/2); i++){
    const personagens = tiposCartas[i]
    cartas.push(personagens)
    cartas.push(personagens)
}

cartas.sort(comparador)

return cartas
}


function renderizarCartasNaTela(cartas){
    const tabuleiro = document.querySelector(".tabuleiro");
    for(let i = 0; i < cartas.length; i++){
    
    tabuleiro.innerHTML += `

    <li class="carta" onclick="virarCarta(this)">
    <div class="front-face face">
        <img src="img/logo-street.png" alt="">
    </div>
    <div class="back-face face">
        <img src="img/${cartas[i]}.jpg" alt="">
    </div>
</li>

`;
}

}

let primeiraCarta = null
let segundaCarta = null


function virarCarta(cartaClicada){

    if(cartaClicada.classList.contains('virada')){
        return;
    }

    if(segundaCarta !== null){
        return;
    }

    if(primeiraCarta === null){
        primeiraCarta = cartaClicada
        }else {
            segundaCarta = cartaClicada
            if(primeiraCarta.innerHTML === cartaClicada.innerHTML){
                
                resetarJogada()
                
            }else {
                setTimeout(desvirarCartas, 1000)
             }
            }


        cartaClicada.classList.add('virada')
}

function desvirarCartas(){
    primeiraCarta.classList.remove('virada')
    segundaCarta.classList.remove('virada')

    resetarJogada()
}

function resetarJogada(){
    primeiraCarta = null
    segundaCarta = null
}



function comparador(){
    return Math.random() - 0.5;
}



function play(){
    const container = document.querySelector('.container')
    const intro = document.querySelector('.intro')

    if(container.classList.contains('escondido')){
        container.classList.remove('escondido')
        intro.classList.add('escondido')
    }
}