var cont = 1
var radio = document.querySelector('.manual-btn')

document.getElementById('radio1').checked = true

setInterval(() =>{
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3) {
        cont = 1
    }

document.getElementById('radio'+cont).checked = true
}