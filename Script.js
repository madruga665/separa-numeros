function transformArray(){
    var numero = document.getElementById('numero').value;
    var numArray = [];
    var par = [];
    var impar = [];
    
    for (let index = 0; index <= numero; index++) {
        numArray.push(index)
    }
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            par.push(i)
            
        } else {
            impar.push(i)
        }      
    }
    numeros.innerHTML = `Total (${numArray.length}) e os numeros são ${numArray}`;
    pares.innerHTML = `Total (${par.length}) e os numeros são ${par}`;
    impares.innerHTML = `Total (${impar.length}) e os numeros são ${impar}`;
}



