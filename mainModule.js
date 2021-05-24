import * as coreImg from "./module/imgCore.js";
import * as hotkeyPackage from "./module/hotkeys.min.js"; //dapat dipanggil langsung functionnya



//-START--ImgCore---------------------------------------------------------------------------------------------------------------

let core = new coreImg.imgClass();            //memanggil class 



window.onload = function () {
    core.statusAwal("Air Kopi","Air Bening",null,null);
    core.statusUpdate();
    document.getElementById('targetAccor').hidden = false;
};


document.getElementById("btnAccor").onclick = function() {
    accorFunc('targetAccor');
};

//var bollean = false; // secara default
var bollean;
function accorFunc(id) {
    var targetElemen = document.getElementById(id);
    if (bollean === true) {
      targetElemen.hidden = false;
      bollean = false; 
    } else { 
      targetElemen.hidden = true;
      bollean = true;
    }
}


document.getElementById("kondisi").onchange = function() {
    core.statusAwal("Air Kopi","Air Bening",null,null);
}


var i = 0;
var elemKondisi = document.getElementById("kondisi");
document.getElementById("btnNext").onclick = function() {
    
    if (i <= 2) { //2 termasuk
        i = i + 1;
        core.statusUpdate(i); //disi

        var txt = i.toString().bold();
        document.getElementById("tahapText").innerHTML = "Hasil dari tahap ke  - " + txt ;

        if (elemKondisi.value !== "satuGelas"){
            switch (i){
                case 1 : core.statusAwal(null,"Air Bening","&#0189; Air Kopi"); break;
                case 2 : core.statusAwal("Air Bening",null,"&#0189; Air Kopi"); break;
                case 3 : core.statusAwal("Air Bening","Air Kopi",null);
            }
        }
        else {
            switch (i){
                case 1 : core.statusAwal(null,"Air Bening","Air Kopi"); break;
                case 2 : core.statusAwal("Air Bening",null,"Air Kopi"); break;
                case 3 : core.statusAwal("Air Bening","Air Kopi",null);
            }
        }
        
    }
    
    else {
        location.reload(); 
    }

    core.frameBerjalan();
};

//-END--ImgCore---------------------------------------------------------------------------------------------------------------









//- START -- CallHotkey -----------------------------------

hotkeys('space', function(event,handler){

    accorFunc('targetAccor');
    console.log('Key yang ditekan :', hotkeys.getPressedKeyCodes());

});

//- STOP -- CallHotkey -----------------------------------