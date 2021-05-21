  class Model {          //Class Model Memanggil seluruh function pada Class Car
    constructor(canvasId, contextCanvas) {
      this.elemCanvas = canvasId;
      this.getContext = contextCanvas;

      var intervalPertama;
      var intervalKedua;

      var rect={ x:0, y:0, width:canvas.width, height:canvas.height };
      var mousePos;
      var message;

      var img = new Image();

      var modeDrag = false ;


      //--- Start --- dipancing melakukan Event --
      var modeDrag = false ;  
      var Posx;
      var Posy;
      //--- End --- dipancing melakukan Event --

      //--- Start --- atas Kondisi
      var elemKondisi;
      var elemKondisiId;

      var statusJSON;
      var statusJSONId;

      var varGelasA = "Air Kopi";
      var varGelasB = "Air Bening";
      var varGelasC = null;
      var varGelasD = null;
      var varGelasE = null;

      var data;
      var dataJson;

      //--- End --- atas Kondisi
    }


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
    if (modeDrag !== true) {  
                      
      canvas.addEventListener("mousemove", function(){
        Posx = event.offsetX;
        Posy = event.offsetY;
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
    function statusAwal(elemKondisiId,statusJSONId) {
      elemKondisi = document.getElementById(elemKondisiId); //kondisi
  
      //--- Start --- Options
      if (elemKondisi.value !== "satuGelas"){  
  
          data = { 
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
  
          data = { 
              kondisGelas : elemKondisi.value,
              status : {
                  gelasA: varGelasA,
                  gelasB: varGelasB,
                  gelasC: varGelasC
              }
          };
  
      }
      //--- End --- Options
      
      dataJson = JSON.stringify(data, null, 2);
      document.getElementById(statusJSONId).innerHTML = dataJson; //statusJSON
    };
    //--- End --- atas Kondisi


    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  export { Model };





