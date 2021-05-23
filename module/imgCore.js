class imgClass {          //Class Model Memanggil seluruh function pada Class Car
    constructor(variabelSave) {
      //this.elemCanvas = canvasId;
      //this.getContext = contextCanvas;

      //this.interval
      //this.statusStop = 0

    }




    //--- Start --- SimulasiUpdate
    statusAwal() {
        var elemKondisi = document.getElementById("kondisi");

        var varGelasA = "Air Kopi";
        var varGelasB = "Air Bening";
        var varGelasC = null;
        var varGelasD = null;
        var varGelasE = null;

        var dataStatus;
        
        //--- Start --- Options
        if (elemKondisi.value !== "satuGelas"){  
    
            dataStatus = { 
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
    
            dataStatus = { 
                kondisGelas : elemKondisi.value,
                status : {
                    gelasA: varGelasA,
                    gelasB: varGelasB,
                    gelasC: varGelasC
                }
            };
    
        }

        var dataJsonDua = JSON.stringify(dataStatus, null, 2);
        document.getElementById("statusJSON").innerHTML = dataJsonDua;
    };
    //--- Stop --- SimulasiUpdate




    //--- Start --- SimulasiUpdate
    statusUpdate() {
        var elemKondisi = document.getElementById("kondisi");

        var simulasiPoint = [
            [0, 10, 72, 96], 
            [0, 24, 48, 72]
        ];

        var gelasPoint;
        var langkahPoint;
        var langkahPointSebelum;
        
        var frameKe;
        var frameSebelum;        
    
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

        var dataini = { 
                        iniframeKe : frameKe,
                        iniframeSebelum : frameSebelum
                      };
        var dataJson = JSON.stringify(dataini, null, 2);
        document.getElementById("outputJs").innerHTML = dataJson;
    };
    //--- Stop --- SimulasiUpdate



    
    btnStart() {
        var frameSebelum = 0;
        var frameKe = 138;
        var interval;
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
    statusAwalDefault(elemKondisiId, statusJSONId) {
      var golang = 5;  
      //this.data = "empat";
      this.data = golang;
      return elemKondisiId + ', it is a ' + statusJSONId + " " + this.UjiSave + " " + this.data +golang;
    }
  }
  
  export { imgClass };





