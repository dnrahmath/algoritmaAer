import {sayHi} from "./module/say.js";
import * as hotkeyPackage from "./module/hotkeys.min.js";
//import * as hotkeySC from "./module/sc-hotkeys.js";  //tidak dapat mengunakan hotkey yg telah di USE 
import * as constructorSC from "./module/sc-constructor.js";
import * as jsonSC from "./module/sc-JSON.js";
//import * as canvasInside from "./module/canvasInside.js";

document.getElementById("outputJs").innerHTML = sayHi("Jhon");



//-START-USING-jsonSC------------------------------------------------------------------------------------------------------------------

let callJson = new jsonSC.loadJSON();            //memanggil class 
document.getElementById("outputJsTiga").innerHTML = callJson.present();   //memanggil function didalam class


//-END-USING-jsonSC------------------------------------------------------------------------------------------------------------------



//-START-USING-constructorSC------------------------------------------------------------------------------------------------------------------

let mycar = new constructorSC.Model("Ford", "Mustang");            //memanggil class dengan input
document.getElementById("outputJsDua").innerHTML = mycar.show();   //memanggil function didalam class


//-END-USING-constructorSC------------------------------------------------------------------------------------------------------------------




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

//-canvas--------------------------------
var interval;
var canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 

var rect={ x:0, y:0, width:canvas.width, height:canvas.height };
var mousePos;
var message;

var img = new Image();
    img.src = "./images/canvasImg.png"; // ./images/canvasTamplate.png

//--- Start --- Mengupdate canvas secara terus menerus --
function draw() {   // melakukan pengulangan untuk menggambar
    
    context.fillStyle = 'white';  // warna background putih
    context.fillRect( rect.x, rect.y, rect.width, rect.height );  // background

    context.drawImage(img, 0, 0, rect.width, rect.height);

    context.fillStyle = "black"; // warna font
    context.fillText(message, 10, 25); // font
    context.font = '15px san-serif';

    statusAwal();
    statusUpdate();

};

interval = setInterval(draw, 800 / 60);  // pengulangan teruss
//--- End --- Mengupdate canvas secara terus menerus --


//--- Start --- dipancing melakukan Event --
var modeDrag = false ;        
if (modeDrag !== true) {  
                  
    canvas.addEventListener("mousemove", function(){
        var Posx = event.offsetX;
        var Posy = event.offsetY;
        mousePos = {"x":Posx,"y":Posy};
              
        if (mousePos !== null) {
            message = "Mouse position x: " + mousePos.x + ", Mouse position y: " + mousePos.y ;
        } else {
            message = "Mouse position x: " + mousePos.x + ", Mouse position y: " + mousePos.y ;
        } 
              
    }, false);
        
};
//--- End --- dipancing melakukan Event --


//--- Start --- atas Kondisi
var elemKondisi = document.getElementById("kondisi");

var varGelasA = "Air Kopi";
var varGelasB = "Air Bening";
var varGelasC = null;
var varGelasD = null;
var varGelasE = null;

function statusAwal() {
    //var elemKondisi = document.getElementById("kondisi");
    //var valueKondisi = elemKondisi.value;

    //--- Start --- Options
    if (elemKondisi.value !== "satuGelas"){  

        var data = { 
            kondisGelas : elemKondisi.value,
            status : {
                gelasA: varGelasA,
                gelasB: varGelasB,
                gelasD: varGelasD,
                gelasE: varGelasE
            }
        };

    }
    else {

        var data = { 
            kondisGelas : elemKondisi.value,
            status : {
                gelasA: varGelasA,
                gelasB: varGelasB,
                gelasC: varGelasC
            }
        };

    }
    //--- End --- Options
    
    var dataJson = JSON.stringify(data, null, 2);
    document.getElementById("statusJSON").innerHTML = dataJson;
};

//duaGelas
//satuGelas
//lihat data apa yang di-isi

//--- End --- atas Kondisi

//--- Start --- SimulasiUpdate
var simulasiPoint = [
    [0, 48, 72, 96], 
    [0, 24, 48, 72]
];


var frame;

var gelasPoint;
var langkahPoint;
var langkahPointSebelum;

var frameKe;
var frameSebelum;

var inter; //menyimpan interval

function statusUpdate() {

    
    switch (elemKondisi.value) {

        case "satuGelas":
          gelasPoint = 0;
          //--
          langkahPoint = 2; //pengulangan 0-3 , pakai button NEXT
          langkahPointSebelum = langkahPoint - 1;
          //--
          frameKe = simulasiPoint[gelasPoint][langkahPoint]; //mendapatkan tempat berhenti
          frameSebelum = simulasiPoint[gelasPoint][langkahPointSebelum];
          break;

        case "duaGelas":
          gelasPoint = 1;
          //--
          langkahPoint = 2; //pengulangan 0-3 , pakai button NEXT
          langkahPointSebelum = langkahPoint - 1;
          //--
          frameKe = simulasiPoint[gelasPoint][langkahPoint];
          frameSebelum = simulasiPoint[gelasPoint][langkahPointSebelum];
      }
    
    
    /*
      if (elemKondisi.value == "satuGelas") {
        gelasPoint = 0;
        langkahPoint = 3; //pengulangan 0-3 , pakai button NEXT
        langkahPointSebelum = langkahPoint - 1;
        //frameKe = simulasiPoint[gelasPoint][langkahPoint]; //mendapatkan tempat berhenti
        frameSebelum = simulasiPoint[gelasPoint][langkahPointSebelum];
        frame = 2; // bergerak bertambah terus jika belum sampai langkahPoint , looping img.src = img{frame}.png
      }
      else {
        gelasPoint = 1;
        langkahPoint = 3; //pengulangan 0-3
        langkahPointSebelum = langkahPoint - 1;
        //frameKe = simulasiPoint[gelasPoint][langkahPoint];
        frameSebelum = simulasiPoint[gelasPoint][langkahPointSebelum];
      }
    */

};

// ------------------------------------------------------------

//var angkaFrame = 0; //0





//var cars = ["f","g","f","g","BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//var array2d = [[3,6],[9,12]];
//var panggil = array2d[0][1];
//var text = "";



/*

function displayImg() {

    if (angkaFrame == frameSebelum ) { //!==
        clearInterval(inter);
      }
      else {
        angkaFrame = angkaFrame + 1 ; 
        console.log(frameSebelum); 
        console.log(angkaFrame);
        console.log(simulasiPoint[gelasPoint][langkahPoint]);
     }

};
*/

function btnStart() {

    //inter = setInterval(displayImg, 1000/24);  // 1 detik = 24 frame 

    //var i = 0; //angkaFrame
    var i = frameSebelum; //angkaFrame , value array didapatkan lalu disimpan di variabel

    function frameLooping() {

        inter = setTimeout(function() {

            console.log(frameSebelum); 
            console.log(i);
            console.log(frameKe);
            //console.log(simulasiPoint[gelasPoint][langkahPoint]);

            i++;

            if (i <= frameKe) {
                frameLooping();
            }

        }, 24000/24);

    }

    frameLooping();

};
document.getElementById("btnStart").onclick = function() {btnStart()};


function btnStopReset() {
    clearInterval(inter);
};
document.getElementById("btnStopReset").onclick = function() {btnStopReset()};


function btnNext() {
    
};



// ------------------------------------------------------------




//-canvas--------------------------------
