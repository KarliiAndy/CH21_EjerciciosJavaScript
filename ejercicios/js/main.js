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