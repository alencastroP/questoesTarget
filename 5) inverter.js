
function inverter(string) {
    let invertido = "";

// for utilizado para passar inversamento os caracteres para dentro de uma variável diferente 
//(dada com "invertido"), assim invertendo o texto
    for (i = string.length-1; i >= 0; i--) {
        invertido += string[i];
    }
    return invertido;
}
console.log(`Target escrito ao contrário é: ${inverter('Target')}`);
