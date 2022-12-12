// ------------------------EJERCICIO 1 ----------------------------------

let list1 = document.getElementById("list1");
let btnmayor= document.getElementById ("btnmayor");
let arreglo1= [3, 5, 7, 1, 6];

function ElMayor(arreglo1){
    let mayor = 0;
    for (let i=0; i<arreglo1.length; i ++){
    if (arreglo1[i] > mayor){
        mayor = arreglo1[i];
    } 
} 
    console.log ("Del arreglo de números:" + arreglo1);
    console.log ("El número más grande es: " + mayor);
    return mayor;
}


for (let i=0; i< arreglo1.length; i ++){
    list1.innerHTML += `<li class="list-group-item" >${i+1} ) ${arreglo1[i]}</li>`;

}

btnmayor.innerHTML += ElMayor (arreglo1);


//----------------Ejercicio 2 ---------------------------------------

let list2 = document.getElementById("list2");
let btnmenor = document.getElementById("btnmenor");
let arreglo2 = [-1, 3, 4, 2, 6];

function ElMenor(arreglo2) {
    let menor = 0;
    for (let i = 0; i < arreglo2.length; i++) {
        if (arreglo2[i] < menor) {
            menor = arreglo2[i];
        }
    } return menor;
}  
for (let i = 0; i < arreglo2.length; i++) { 
    list2.innerHTML+= `<li class="list-group-item" >${i+1} ) ${arreglo2[i]}</li>`;
    }
     btnmenor.innerHTML+= ElMenor(arreglo2);
