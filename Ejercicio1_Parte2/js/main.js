
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

    //---------------Ejercicio3---------------------------

   






    //-----------Ejercicio 4---------------------------------


    let btnmultiplo = document.getElementById ("btnmultiplo");

    function multiplo(){

    let numi = document.getElementById("n").value;
        
       if(numi%3 == 0){
            return "El número " + numi + " es múltiplo de 3."
        }
        else if(numi%3 != 0){
            return "El número " + numi + " no es múltiplo de 3."
        }
    }

    btnmultiplo.addEventListener("click", function (event) {
        event.preventDefault();
        let multiplo3 = document.getElementById("alertmultiplo3");
        multiplo3.innerHTML = multiplo();
    })

    //------------Ejercicio 5---------------------------------

    let btnsuma = document.getElementById ("btnsuma");
    let sumados=0
     function sum() {

        let numb1= document.getElementById("number1").value;
        let numb2= document.getElementById("number2").value;
        let numb3= document.getElementById("number3").value;
           
            if (numb1 === (numb2 + numb3)){
                return sumados ="El número " + numb1 + " es igual a la suma de" + numb2 +"y" + numb3 ;
            } else if (numb3 === (numb1 + numb2)){
                return "El número " + numb3 + " es igual a la suma de" + numb1 +"y" + numb2 ;
            } else if (numb2 === (numb1 + numb3)){
                return "El número " + numb2 + " es  igual a la suma de" + numb1 +"y" + numb3 ;
            } else{
                return "los numeros no son la suma de ninguno de ellos"
            }
        }

        btnsuma.addEventListener("click", function (event) {
            event.preventDefault();
            let sum2 = document.getElementById("alertsumadosnum");
            sum2.innerHTML = sum();
            
        })
        

        










    //----------Ejercicio 6----------------------------------

//     let calcular = document.getElementById ("calcular");

//    let par=0;
//    let impar=0;

//     function calcular(){
//         let nume = document.getElementById('numero').value;
//         if(nume % 2 == 0){
//            return par;
//         }else{
//            paroimpar= `"Es impar"`;
//            return impar;
//         }
//     }

//     calcular.addEventListener("click", function (event) {
//         event.preventDefault();
//         let esparoimpar = document.getElementById("resultado");
//         esparoimpar.innerHTML = `El número es: ${calcular(par , impar)}`;
//     })


function calcular(){
    let numero = parseInt(document.getElementById('numero').value);
    if(numero % 2 == 0){
       return document.getElementById('resultado').value = `El número ${numero} es par.`;
    }else{
        return document.getElementById('resultado').value = `El número ${numero} es impar.`;
    }
}