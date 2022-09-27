let fstNumber, scndNumber;
let mathSimple = document.querySelector("#mathSimple");
let add = document.querySelector("#add");
let mns = document.querySelector("#mns");
let mlt = document.querySelector("#mlt");
let dvsn = document.querySelector("#dvsn");
let result = document.querySelector("#result");
let mthsmbl = document.querySelector("#mthsmbl");


function firstN(a){
     fstNumber = document.querySelector("#fstNumber").innerHTML = a;
}

function scn(b){
     scndNumber = document.querySelector("#scndNumber").innerHTML = b;
}

add.addEventListener("click",()=>{

    mathSimple.innerHTML = "+";     
    mthsmbl.innerHTML = "+";     
});
mns.addEventListener("click",()=>{
    
    mathSimple.innerHTML = "-";  
    mthsmbl.innerHTML = "-";  
});
mlt.addEventListener("click",()=>{

    mathSimple.innerHTML = "x";  
    mthsmbl.innerHTML = "x";  
});
dvsn.addEventListener("click",()=>{

    mathSimple.innerHTML = "/";  
    mthsmbl.innerHTML = "/";  
});

function rslt(){
    fstNumber = fstNumber * 1; 
    scndNumber = scndNumber * 1;
    if( mathSimple.innerHTML == "+"){
        result.innerHTML =  " = " + (fstNumber + scndNumber);
    }
    if( mathSimple.innerHTML == "-"){
        result.innerHTML =  " = " + (fstNumber - scndNumber);
    }
    if( mathSimple.innerHTML == "x"){
        result.innerHTML =  " = " + (fstNumber * scndNumber);
    }
    if( mathSimple.innerHTML == "/"){
        result.innerHTML =  " = " + (fstNumber / scndNumber);
    }
}
function rst(){
    result.innerHTML = " ";
}