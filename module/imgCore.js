class imgClass {          //Class Model Memanggil seluruh function pada Class Car
    constructor(variabelSave) {
      //this.elemCanvas = canvasId;
      //this.getContext = contextCanvas;

      //this.interval
      this.statusStop = 0

      //--- Start --- atas Kondisi
      this.UjiSave = variabelSave
      this.varGelasA = "Air Kopi"
      this.varGelasB = "Air Bening"
      this.varGelasC = null
      this.varGelasD = null
      this.varGelasE = null

      this.data
      this.dataJson
      //--- End --- atas Kondisi

    }



    btnStart() {
        var frameSebelum = 0;
        var frameKe = 72;
        //var interval;
        var i = frameSebelum; //angkaFrame , value array didapatkan lalu disimpan di variabel
    
        function frameLooping() {
    
            interval = setTimeout(function() {

                if (i <= 9){
                    i = "000" + i ;
                }
    
                else if (i <= 99){
                    i = "00" + i ;
                }
    
                else if (i <= 999){
                    i = "0" + i ;
                }
    
                console.log(frameSebelum); 
                console.log(i);
                document.getElementById("img").src = "./images/imgFrame/satuGelas/satuGelas-Frame"+i+".png";
                document.getElementById("frameNumber").innerHTML = i;
                console.log(frameKe);
    
                i++;

                if (i <= frameKe) {
                    frameLooping();
                }

                //return i;  // tidak usah
    
            }, 1000/6);  // 6 fps
    
        }
    
        frameLooping();

    };


    //btnStopReset() {
    //    clearInterval(interval);
    //};



    //--- Start --- atas Kondisi
    //function tidak perlu dituliskan kembali didepan
    statusAwal(elemKondisiId, statusJSONId) {
      var golang = 5;  
      //this.data = "empat";
      this.data = golang;
      return elemKondisiId + ', it is a ' + statusJSONId + " " + this.UjiSave + " " + this.data +golang;
    }
  }
  
  export { imgClass };





