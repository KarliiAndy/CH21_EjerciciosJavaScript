
//--------------------Ejercicio 3---------------------------------------


let list3 = document.getElementById("list3");
let btncase1 = document.getElementById("btncase1");
let arreglo3 = [1, 22, 5, 17, 10, 5, 40, 5] ;
    console.log (arreglo3);
    let numrep = 0;
    function Case1(arreglo3) {
        let repetido = 0;
        let repetir = arreglo3[2];
    for (let i=0; i< arreglo3.length; i++){
        if(arreglo3[i] === arreglo3[repetir]){
            numrep ++;
            repetido = arreglo3[i+1];
     } console.log("Se repite el numero: " + repetir)
     return repetir;
    }
}

    for (let i = 0; i < arreglo3.length; i++) {
        list3.innerHTML+= `<li class="list-group-item" >${i+1} ) ${arreglo3[i]}</li>`;
    }
    btncase1.innerHTML += Case1(arreglo3);
