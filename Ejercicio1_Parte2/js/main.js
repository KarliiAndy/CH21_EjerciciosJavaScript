
//--------------Ejercicio 4------------------

let btncomparar1 = document.getElementById ("btncomparar1");



let elmayor = 0;

function nummayor(){

let numerito1 = document.getElementById("num1").value;
let numerito2 = document.getElementById("num2").value;
let numerito3 = document.getElementById("num3").value;


        if ( numerito1 > numerito2 && numerito2> numerito3) {
            elmayor = numerito1;
            return elmayor; 
             } else if (numerito2 > numerito1 && numerito2 > numerito3){
                elmayor=numerito2
                return elmayor;
             }
            else if (numerito3> numerito1 && numerito3 > numerito2){
             elmayor = numerito3;
             return elmayor;
            }
         

        }
    
    btncomparar1.addEventListener("click", function (event) {
        event.preventDefault();
        let numeromasgrande = document.getElementById("alertnumeromayor");
        numeromasgrande.innerHTML = `El número más grande es: ${nummayor(elmayor)}`;
    })




