let arrayDiNumeri = [];
const numeroElementi = 10;
const max = 100;

function inserisciNumeri(){
    for (let i = 0; i <= 10; i++) {
        let num = Math.floor(Math.random()*max);
        arrayDiNumeri.push(num);
        
    }
    return arrayDiNumeri;
    
}
console.log(inserisciNumeri());

arrayDiNumeri.forEach(numero => {
    const padre = document.querySelector('main');
    const nodo = document.createElement('p');
    const text = document.createTextNode(numero);
    padre.appendChild(nodo);
    nodo.appendChild(text)


    if (numero%2==0) {
    nodo.style.backgroundColor = "red";
    
    } else {
        nodo.style.backgroundColor = "pink";
    }
    
});

