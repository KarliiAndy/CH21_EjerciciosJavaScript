
//--------------------Ejercicio 3---------------------------------------

//--------------------Caso 1------------------------------------
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



//--------------------Caso 2------------------------------------

let list4 = document.getElementById("list4");
let btncase2 = document.getElementById("btncase2");
let arreglo4 = [7, 41, 5, 7, 10, 13, 2] ;
    console.log (arreglo4);
    let numrep2 = 0;
    function Case2(arreglo4) {
        let repetido2 = 0;
        let repetir2 = arreglo4[3];
    for (let i=0; i< arreglo3.length; i++){
        if(arreglo4[i] === arreglo4[repetir2]){
            numrep2 ++;
            repetido2 = arreglo4[i+1];
     } console.log("Se repite el numero: " + repetir2)
     return repetir2;
    }
}

    for (let i = 0; i < arreglo4.length; i++) {
        list4.innerHTML+= `<li class="list-group-item" >${i+1} ) ${arreglo4[i]}</li>`;
    }
    btncase2.innerHTML += Case2(arreglo4);