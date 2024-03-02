function converter(){
let tempC = document.getElementById('txt_temperatura').value
let tempF = tempC * 1.8 + 32
document.getElementById('span_resultado').innerText = tempF
}