function criaSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('Pt-br',{
        hour12: false,
        timeZone: 'GMT'

    })
}


const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.inicio')
const pausar = document.querySelector('.pausa')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaSegundos(segundos)
     },1000)
}

iniciar.addEventListener('click',function(event){
    clearInterval(timer)
    iniciaRelogio()
    relogio.style.color = 'black'
})


function pause(){
    clearInterval(timer)
    relogio.style.color = 'red'
}

zerar.addEventListener('click',function(event){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
    segundos = 0
})