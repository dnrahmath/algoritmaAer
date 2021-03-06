class imgClass {          //Class Model Memanggil seluruh function pada Class Car
    constructor() {

      this.dataArray;

    }






    //--- Start --- statusAwal() ---
    statusAwal(Q,W,R) {
        var elemKondisi = document.getElementById("kondisi");

        var varGelasA = Q;
        var varGelasB = W;
        var varGelasC = R;
        var varGelasD = R;
        var varGelasE = R;

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
        
    };
    //--- STOP --- statusAwal() ---






    //--- START --- statusUpdate() ---
    statusUpdate(bertambah) {
        var elemKondisi = document.getElementById("kondisi");

        var Point = [
            [0, 48, 90, 138], 
            [0, 70, 112, 166]
        ];

        var titikPoint = bertambah ;  //btnNext
        var titikPointSebelumnya = titikPoint - 1;  //sudah otomatis nanti terisi

        var frameAwal;
        var frameAkhir;
        var finish;
    
        switch (elemKondisi.value) {
    
            case "satuGelas":
              frameAwal = Point[0][titikPointSebelumnya];
              frameAkhir = Point[0][titikPoint]; //mendapatkan tempat berhenti
              finish = Point[0][3];
              break;
    
            case "duaGelas":
              frameAwal = Point[1][titikPointSebelumnya];
              frameAkhir = Point[1][titikPoint];
              finish = Point[1][3];
        }

        var dataPoinArray = [ 
                             frameAwal,frameAkhir,finish
                            ];

        var dataPoin = { 
                          "frameAwal" : frameAwal,
                          "frameAkhir" : frameAkhir,
                          "finish" : finish
                        };

        var dataPoinJson = JSON.stringify(dataPoin, null, 2);
        document.getElementById("outputJs").innerHTML = dataPoinJson;
        this.dataArray = dataPoinArray;

    };
    //--- STOP --- statusUpdate() ---






    //--- START --- frameBerjalan() ---
    frameBerjalan() {
        var elemKondisi = document.getElementById("kondisi");

        var titikAwal = this.dataArray[0];
        var titikAkhir = this.dataArray[1];
        var finishbar = this.dataArray[2];
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

                

                if (elemKondisi.value !== "satuGelas"){
                    document.getElementById("img").src = "./images/imgFrame/duaGelas/duaGelas-Frame"+i+".png";
                    //document.getElementById("img").src = ImgSrc_satuGelas[i];
                    document.getElementById("frameNumber").innerHTML = i;
                }
                else {
                    document.getElementById("img").src = "./images/imgFrame/satuGelas/satuGelas-Frame"+i+".png";
                    document.getElementById("frameNumber").innerHTML = i;
                }

                document.getElementById("persenId").value = i;
                document.getElementById("persenId").max = finishbar;
                var per = i / finishbar * 100;
                var sen = per.toString().substr(0,4);
                document.getElementById("persenTextId").innerHTML = sen + "%";
    
                i++;

                if (i <= titikAkhir) {
                    frameLooping();
                }
    
            }, 1000/6);  // 6 fps
    
        }
    
        frameLooping();

    };
    //--- STOP --- frameBerjalan() ---


};
  
export { imgClass };





