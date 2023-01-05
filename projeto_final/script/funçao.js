let anotações = []
let quantidade = 0


let lista = document.getElementById('lista')
let visor = document.getElementById('visor')

const inputEle = document.getElementById('anota')
inputEle.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode
    if (key == 13) { 
        if (inputEle.value.length == 0  || inputEle.value.length > 20) {
            visor.innerText = 'De 1 a 20 letras!'
        } else if(quantidade >= 5) {
            visor.innerText = 'O limite máximo de anotações é: 5!' 
        } else {
            lista.innerText = ''
            visor.innerText = ''
            let anotação = String(inputEle.value)
            if (anotações.indexOf(anotação) != -1) {
                visor.innerText = `"${anotação}" já está presente na Lista!`
            } else {
                let adicionar = anotações.push(`${anotação}`)
                quantidade++
            }
            inputEle.value = ''
            for(let contador in anotações) {
                lista.innerHTML += `<li name="anotaçao-${contador}" onclick="deletar(${contador})">${anotações[contador]}</li>`
            }
        }
    }
})

function deletar(valor) {
    let numero = valor 
    let valorparadeletar = document.getElementsByName(`anotaçao-${numero}`)[0]
    let removedItem = anotações.splice(numero, 1)
    quantidade--
    lista.removeChild(valorparadeletar)
    lista.innerText = ''
    visor.innerText = ''
    for(let contador in anotações) {
        lista.innerHTML += `<li name="anotaçao-${contador}" onclick="deletar(${contador})">${anotações[contador]}</li>`
    }
}
