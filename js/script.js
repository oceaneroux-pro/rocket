'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let btnLaunch;
let compteur = 10;
let IDinterval;
let btnCancel;
let btnReset;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function onClickBtnLaunch()
{
    // séléctionner l'endroit où le countdown doit s'afficher
    let span = document.querySelector("#billboard span");
    let image = document.querySelector('#rocket');
    
    span.textContent = compteur;
    
    if(compteur>0){
        //décrémenter le compteur
        --compteur
        // changer l'image
        image.src="images/rocket2.gif";
        //désactiver le bouton
        btnLaunch.classList.add("disabled")
    }
    else{
        image.src="images/rocket3.gif";
        image.classList.add("tookOff");
    }
    
    //désinstaller l'évenement
    btnLaunch.removeEventListener("click",startCountDown);
};

//*****************************START*********************************
function startCountDown()
{
    IDinterval = setInterval(onClickBtnLaunch,1000); // 1 sec de delay
};


//*****************************STOP**********************************
function stopCountDown(){
    //stopper le chrono
    clearInterval(IDinterval);
    //réactiver l'event click sur btnLaunch
    btnLaunch.addEventListener("click",startCountDown);
    //supprimer la classe disabled sur btnLaunch
    btnLaunch.classList.remove("disabled")
};


//*****************************RESET*********************************

function resetTimer(){
    //remettre le compteur a 10
    compteur = 10;
    // raffraichir l'affichage
    let span = document.querySelector("#billboard span");
     // changer le contenu textuel
    span.textContent = compteur;
    
    let image = document.querySelector('#rocket');
    image.classList.remove("tookOff");
    image.src="images/rocket1.png" 
    
    clearInterval(IDinterval);
    btnLaunch.classList.remove("disabled");
    btnLaunch.addEventListener("click",startCountDown);
};


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener('DOMContentLoaded', function(){
    
    // sélectionner les boutons
    btnLaunch = document.getElementById("firing-button");
    btnCancel = document.getElementById("cancel-button");
    btnReset = document.getElementById("reset-button");
    
    // installer les évenements
    btnLaunch.addEventListener("click",startCountDown);
    btnCancel.addEventListener("click",stopCountDown);
    btnReset.addEventListener("click",resetTimer);
});