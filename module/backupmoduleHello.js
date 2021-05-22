
//-canvas--------------------------------
var intervalPertama;
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

intervalPertama = setInterval(draw, 800 / 60);  // pengulangan teruss
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
    [0, 10, 72, 96], 
    [0, 24, 48, 72]
];


//var frame;

var gelasPoint;
var langkahPoint;
var langkahPointSebelum;

var frameKe;
var frameSebelum;

var intervalKedua; //menyimpan interval

function statusUpdate() {

    
    switch (elemKondisi.value) {

        case "satuGelas":
          gelasPoint = 0;
          //--
          langkahPoint = 1; //pengulangan 0-3 , pakai button NEXT
          langkahPointSebelum = langkahPoint - 1;
          //--
          frameKe = simulasiPoint[gelasPoint][langkahPoint]; //mendapatkan tempat berhenti
          frameSebelum = simulasiPoint[gelasPoint][langkahPointSebelum];
          break;

        case "duaGelas":
          gelasPoint = 1;
          //--
          langkahPoint = 1; //pengulangan 0-3 , pakai button NEXT
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

        intervalKedua = setTimeout(function() {

            console.log(frameSebelum); 
            console.log(i);

            if (i <= 9){
                i = "000" + i ;
            }

            else if (i <= 99){
                i = "00" + i ;
            }

            else if (i <= 999){
                i = "0" + i ;
            }

            let cordinate = new canvasInside.Model("input ke Model");            //memanggil class 
            document.getElementById("frameNumber").innerHTML = cordinate.statusAwal("elemK", "status");   //memanggil function didalam class

            //document.getElementById("frameNumber").innerHTML = i;
            //img.src = "./images/satuGelas/satuGelas-Frame00"+ i +".png"; //blm di fix
            console.log(frameKe);
            //console.log(simulasiPoint[gelasPoint][langkahPoint]);

            i++;

            if (i <= frameKe) {
                frameLooping();
            }

        }, 1000/6);  // 6 fps

    }

    frameLooping();

};
document.getElementById("btnStart").onclick = function() {btnStart()};


function btnStopReset() {
    clearInterval(intervalPertama);
    clearInterval(intervalKedua);
};
document.getElementById("btnStopReset").onclick = function() {btnStopReset()};


function btnNext() {
    
};



// ------------------------------------------------------------




//-canvas--------------------------------
