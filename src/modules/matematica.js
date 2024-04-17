/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
    x = parseInt(x)
    y = parseInt(y)
return  x+y
}
const multiplicar = (x, y) => {
    x = parseInt(x)
    y = parseInt(y)
return x*y
};

const restar = (x, y) => {
    x = parseInt(x)
    y = parseInt(y)
return x-y
}

const dividir = (x, y) => {
    x = parseInt(x)
    y = parseInt(y)
    
    if(y == 0){
        return "no se puede dividir por cero"
    }else{
        return x/y
    }

}

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar, restar, dividir};