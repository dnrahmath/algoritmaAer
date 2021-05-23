class imgClass {          //Class Model Memanggil seluruh function pada Class Car
    constructor() {
      this.dataJson;
      this.dataArray;
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

            document.getElementById("img").src = "./images/imgFrame/duaGelas/duaGelas-Frame0000.png";

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

            document.getElementById("img").src = "./images/imgFrame/satuGelas/satuGelas-Frame0000.png";
            
            dataStatus = { 
                kondisGelas : elemKondisi.value,
                status : {
                    gelasA: varGelasA,
                    gelasB: varGelasB,
                    gelasC: varGelasC
                }
            };
    
        }

        var dataJsonStatus = JSON.stringify(dataStatus, null, 2);
        document.getElementById("statusJSON").innerHTML = dataJsonStatus;
        this.dataJson = dataJsonStatus;
    };
    //--- Stop --- SimulasiUpdate




    //--- Start --- SimulasiUpdate
    //--- Start --- SimulasiUpdate

    //--- Start --- SimulasiUpdate
    statusUpdate(bertambah) {
        var elemKondisi = document.getElementById("kondisi");

        var Point = [
            [0, 48, 90, 138], 
            [0, 70, 112, 166]
        ];

        var titikPoint = bertambah ;  //btnNext
        console.log(titikPoint);
        var titikPointSebelumnya = titikPoint - 1;  //sudah otomatis nanti terisi
        console.log(titikPointSebelumnya);

        var frameAwal;
        var frameAkhir;
    
        switch (elemKondisi.value) {
    
            case "satuGelas":
              //--
              //titikPoint = 1; //pengulangan 0-3 , pakai button NEXT
              //titikPointSebelumnya = titikPoint - 1;
              //--
              frameAwal = Point[0][titikPointSebelumnya];
              frameAkhir = Point[0][titikPoint]; //mendapatkan tempat berhenti
              break;
    
            case "duaGelas":
              //--
              //titikPoint = 1; //pengulangan 0-3 , pakai button NEXT
              //titikPointSebelumnya = titikPoint - 1;
              //--
              frameAwal = Point[1][titikPointSebelumnya];
              frameAkhir = Point[1][titikPoint];
        }

        var dataPoinArray = [ 
                             frameAwal,frameAkhir
                            ];

        document.getElementById("outputJs").innerHTML = dataPoinArray;
        this.dataArray = dataPoinArray;
    };
    //--- Stop --- SimulasiUpdate



    
    frameBerjalan() {
        var elemKondisi = document.getElementById("kondisi");

        var titikAwal = this.dataArray[0];
        var titikAkhir = this.dataArray[1];
        var interval;
        var i = titikAwal; //angkaFrame , value array didapatkan lalu disimpan di variabel
    
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
    
                //console.log(titikAwal); 
                //console.log(i);
                if (elemKondisi.value !== "satuGelas"){
                    document.getElementById("img").src = "./images/imgFrame/duaGelas/duaGelas-Frame"+i+".png";
                    document.getElementById("frameNumber").innerHTML = i;
                }
                else {
                    document.getElementById("img").src = "./images/imgFrame/satuGelas/satuGelas-Frame"+i+".png";
                    document.getElementById("frameNumber").innerHTML = i;
                }
                //console.log(titikAkhir);
    
                i++;

                if (i <= titikAkhir) {
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





