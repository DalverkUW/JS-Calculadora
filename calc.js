var pantalla = document.getElementById("pantalla")
var num1
var num2
var oper

function uno(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    }    
    pantalla.textContent = pantalla.textContent + '1'
}

function dos(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '2'
}

function tres(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '3'
}

function cuatro(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '4'
}

function cinco(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '5'
}

function seis(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '6'
}

function siete(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '7'
}

function ocho(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '8'
}

function nueve(){
    if (pantalla.textContent == 0) {
        pantalla.textContent = ''
    } 
    pantalla.textContent = pantalla.textContent + '9'
}

function cero(){
    pantalla.textContent = pantalla.textContent + '0'
}

// Limpiar
function clear(){    
    pantalla.textContent = '0';
}

// Tecla C
function c(){
    clear();
    num1 = 0;
    num2 = 0;
}

function suma() {
    num1 = pantalla.textContent
    oper = '+'
    clear(); 
}

function resta() {
    num1 = pantalla.textContent
    oper = '-'
    clear(); 
}

function mult() {
    num1 = pantalla.textContent
    oper = '*'
    clear(); 
}

function div() {
    num1 = pantalla.textContent
    oper = '/'
    clear(); 
}

function igual() {
    num2 = pantalla.textContent;
    calcular();
}

function calcular() {
    var result = 0
    switch (oper) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;

        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
    
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;  

        }
    clear();
    pantalla.textContent = result;
}