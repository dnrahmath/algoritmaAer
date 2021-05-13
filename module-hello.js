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

function statusUpdate() {
    var elemKondisi = document.getElementById("kondisi");
    //var valueKondisi = elemKondisi.value;

    if (elemKondisi.value !== "satuGelas"){  
        var data = { 
            kondisGelas : elemKondisi.value,
            status : {
                gelasA: "Air Kopi",
                gelasB: "Air Bening",
                gelasD: null,
                gelasE: null
            }
        };
    }
    else {
        var data = { 
            kondisGelas : elemKondisi.value,
            status : {
                gelasA: "Air Kopi",
                gelasB: "Air Bening",
                gelasC: null
            }
        };
    }
    
    var dataJson = JSON.stringify(data, null, 2);

    //document.getElementById("statusGelas").innerHTML = valueKondisi;
    document.getElementById("statusJSON").innerHTML = dataJson;
};

//duaGelas
//satuGelas
//lihat data apa yang di-isi

//--- End --- atas Kondisi


//--- Start --- bawah Status
//var data = { 
//    kondisGelas : elemKondisi.value,
//    status : {
//        gelasA: "Air Kopi",
//        gelasB: "Air Bening",
//        gelasC: null,
//        gelasD: null,
//        gelasE: null
//    }
//};

var dataJson = JSON.stringify(data, null, 2);

document.getElementById("statusJSON").innerHTML = dataJson;
//--- End --- bawah Status







//-canvas--------------------------------
