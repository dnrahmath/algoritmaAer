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
        
        
        var ImgSrc_satuGelas = [ 'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0001.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0002.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0003.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0004.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0005.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0006.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0007.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0008.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0009.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0010.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0011.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0012.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0013.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0014.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0015.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0016.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0017.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0018.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0019.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0020.png' ,  
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0021.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0022.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0023.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0024.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0025.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0026.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0027.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0028.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0029.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0030.png' ,  
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0031.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0032.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0033.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0034.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0035.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0036.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0037.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0038.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0039.png' , 
                                       'https://dnrahmath.github.io/algoritmaAer/images/imgFrame/satuGelas/satuGelas-Frame0040.png' 
                                     ];
        
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

                /*
                if (i <= 9){
                    i = "000" + i ;
                }
    
                else if (i <= 99){
                    i = "00" + i ;
                }
    
                else if (i <= 999){
                    i = "0" + i ;
                }
                */

                

                if (elemKondisi.value !== "satuGelas"){
                    //document.getElementById("img").src = "./images/imgFrame/duaGelas/duaGelas-Frame"+i+".png";
                    document.getElementById("img").src = ImgSrc_satuGelas[i];
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
    
            }, 750);  // 0.75 fps
    
        }
    
        frameLooping();

    };
    //--- STOP --- frameBerjalan() ---


};
  
export { imgClass };





