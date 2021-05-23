import * as hotkeyPackage from "./module/hotkeys.min.js"; //dapat dipanggil langsung functionnya

//import {sayHi, sayAAAA, sayBBBB} from "./module/say.js";
import * as say from "./module/say.js";
import * as constructorSC from "./module/sc-constructor.js";
import * as jsonSC from "./module/sc-JSON.js";
import * as canvasInside from "./module/canvasInside.js";
import * as coreImg from "./module/imgCore.js";


//-START-sayHi------------------------------------------------------------------------------------------------------------------

//import {sayHi} from "./module/say.js";
document.getElementById("outputJs").innerHTML = say.sayHi("Jhon") + say.sayAAAA("lanj")+ say.sayBBBB("lol");

//-END-sayHi------------------------------------------------------------------------------------------------------------------




//-START-USING-constructorSC------------------------------------------------------------------------------------------------------------------

let mycar = new constructorSC.Model("iniIsianBrand", "iniIsianMod");            //memanggil class dengan input
document.getElementById("outputJsDua").innerHTML = mycar.show("iniValueIsiLOOOLLL");   //memanggil function didalam class

//-END-USING-constructorSC------------------------------------------------------------------------------------------------------------------







//-START-USING-jsonSC------------------------------------------------------------------------------------------------------------------

let callJson = new jsonSC.loadJSON();            //memanggil class 
document.getElementById("outputJsTiga").innerHTML = callJson.present();   //memanggil function didalam class

//-END-USING-jsonSC------------------------------------------------------------------------------------------------------------------







//-START-USING-Hotkey------------------------------------------------------------------------------------------------------------------

//isPressed
hotkeys('b', function(event,handler){
  //event.srcElement: input 
  //event.target: input
  if(event.target === "input"){
      alert('you pressed b!')
      console.log(hotkeys.getPressedKeyCodes());
  }
  alert('you pressed b!') 
  console.log(hotkeys.getPressedKeyCodes());
});
//hotkeys.unbind('a');  //disable hotkeys a



var lastB = null; //variabel double click

//keyup
hotkeys('a,w,ctrl+a,alt+a+s,ctrl+s,ctrl+c,ctrl+v', {keyup: true}, function(event, handler) {
  if (event.type === 'keydown') {
    console.log('keydown:', event.type, handler, handler.key);
    console.log('lastButton: ', lastB);
  }

  if (event.type === 'keyup') {
    console.log('keyup:', event.type, handler, handler.key);
    
    if (handler.key === lastB) {                     //membuat jika tombol sembelum === sesudah {ini double click}
      console.log('DoubleClick: ', handler.key);
    }
    
    lastB = handler.key;                    // menyimpan click terakhir (pastikan setelah if else double-click)
    console.log('lastButton: ', lastB);
  }
  
  
  console.log('PressedKeyCodes', hotkeys.getPressedKeyCodes());  //Mendapat kode tombol yg ditekan
});


//https://stackoverflow.com/questions/20372394/how-to-disable-ctrlu-using-javascript
//Disable Ctrl+S Proses

document.onkeydown = function(e) {
            /*
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 83)) {//Alt+c, Alt+v, Ctrl+s, will also be disabled sadly.
                alert('not allowed');
            } */
            
            /*
            if (e.ctrlKey && (e.keyCode === 87)) {//Ctrl+w , Disable Hotkeys , GAGAL
                return false; //Disable Hotkeys
                alert('not allowed');
            }
            */
            
            if (e.ctrlKey && (e.keyCode === 65)) {//Ctrl+a , Disable Hotkeys
                return false; //Disable Hotkeys
            }
            
            if (e.ctrlKey && (e.keyCode === 67)) {//Ctrl+c , Disable Hotkeys
                return false; //Disable Hotkeys
            }
            
            if (e.ctrlKey && (e.keyCode === 86)) {//Ctrl+v , Disable Hotkeys
                return false; //Disable Hotkeys
            }
            
            if (e.ctrlKey && (e.keyCode === 83)) {//Ctrl+s , Disable Hotkeys
                //alert('not allowed');
                return false; //Disable Hotkeys
            }
            
            //return false; //Disable Hotkeys
};

/*
document.keypress = function(e) {
            event.preventDefault();

            if (event.which == 87 && event.ctrlKey) {
                alert("Ctrl-W pressed");
                return false;
            }  
            
            if (e.ctrlKey && (e.keyCode === 87)) {//Ctrl+w , Disable Hotkeys
                return false; //Disable Hotkeys
                alert('not allowed');
            }  

    return false;
};
*/

/*
document.beforeunload = function(e) {
    if(hasUnsaved()) {
        //return 'You have unsaved stuff. Are you sure you want to leave?';
        alert('not allowed');
    }
    else { alert('not allowed'); }
};
*/

//-END-USING-Hotkey------------------------------------------------------------------------------------------------------------------









//-START--ImgCore---------------------------------------------------------------------------------------------------------------

let core = new coreImg.imgClass();            //memanggil class 
//document.getElementById("outputJsTiga").innerHTML = core.btnStart();   //memanggil function didalam class


document.getElementById("btnStart").onclick = function() {
    core.btnStart()
    //document.getElementById("outputJsTiga").innerHTML = core.statusUpdate();
    core.statusAwal()
    core.statusUpdate()
};


function mengulangi() {
    core.statusAwal()
    core.statusUpdate()
}
//intervalPertama = setInterval(mengulangi, 1000/2);  // pengulangan teruss setiap 0.5 detik

//document.getElementById("btnStopReset").onclick = function() {
//    core.btnStopReset()
//};


//-END--ImgCore---------------------------------------------------------------------------------------------------------------
