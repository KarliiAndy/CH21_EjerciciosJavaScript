
//--------------Ejercicio 1------------------

let btncomparar1 = document.getElementById ("btncomparar1");



let elmayor = 0;

function nummayor(){

let numerito1 = document.getElementById("num1").value;
let numerito2 = document.getElementById("num2").value;
let numerito3 = document.getElementById("num3").value;


        if ( numerito1 > numerito2 && numerito2> numerito3) {
            elmayor = numerito1;
            console.log ("El numero más grande es " + elmayor)
            return elmayor; 
             } else if (numerito2 > numerito1 && numerito2 > numerito3){
                elmayor=numerito2
                console.log ("El numero más grande es " + elmayor)
                return elmayor;
             }
            else if (numerito3> numerito1 && numerito3 > numerito2){
             elmayor = numerito3;
             console.log ("El numero más grande es " + elmayor)
             return elmayor;
            }
         

        }
    
    btncomparar1.addEventListener("click", function (event) {
        event.preventDefault();
        let numeromasgrande = document.getElementById("alertnumeromayor");
        numeromasgrande.innerHTML = `El número más grande es: ${nummayor(elmayor)}`;
    })



//-------------------------Ejercicio 2---------------------------------------------

let btncomparar2 = document.getElementById ("btncomparar2");



let elmenor = 0;

function nummenor(){

let nume1 = document.getElementById("n1").value;
let nume2 = document.getElementById("n2").value;
let nume3 = document.getElementById("n3").value;


        if ( nume2 > nume1 && nume3> nume1) {
            elmenor = nume1;
            console.log ("El numero más pequeño es " + elmenor)
            return elmenor; 
            
             } else if (nume2 < nume1 && nume2 < nume3){
                elmenor=nume2
                console.log ("El numero más pequeño es " + elmenor)
                return elmenor;
             }
            else if (nume3< nume1 && nume3 < nume2){
             elmenor = nume3;
             console.log ("El numero más pequeño es " + elmenor)
             return elmenor;
            }
         

        }
    
    btncomparar2.addEventListener("click", function (event) {
        event.preventDefault();
        let numeromaspequeño = document.getElementById("alertnumeromenor");
        numeromaspequeño.innerHTML = `El número más pequeño es: ${nummenor(elmenor)}`;
    })
