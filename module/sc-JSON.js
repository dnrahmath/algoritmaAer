export class loadJSON {
    constructor() {
        //this.contact;
        //this.memberfilter;
        //this.jsonText;
    }
    present() {
        var contact;
        var memberfilter;
        var jsonText;

        var obj;
        var mf;
        var mfDua;
        var PanggillmfDua;

        var objTiga;

        
        //GAGAL
        /*
        mfDua=[];
        mfDua[0].push(["f0-layer0","f0-layer1","f0-layer3",]);
        mfDua[1].push(["f1-layer0","f1-layer1","f1-layer3",]);
        */

      /*-------------------------------------------*/

      /*
      var ArrInhTigaData=[];  //DataIMG-Array_Paling_Dalam
      ArrInhTigaData.push('DataIMG0-Ke0'); //0
      ArrInhTigaData.push('DataIMG0-Ke1'); //1
      ArrInhTigaData.push('DataIMG0-Ke2'); //2
      */

      var x,y,z;
      x = "Data1";
      y = "Data2";
      z = "VarData3-Layer0";

      var ArrDataImg=[];  //DataLayer[pilih layer] + DataIMG[langsung ke -3 tempat BLOB ]
      ArrDataImg.push(['| ColomData0 |',x,y,z]); //0-UrlIMG
      ArrDataImg.push(['| ColomData1 |',"Data1","Data2","Data3-Layer1"]); //1-UrlIMG
      ArrDataImg.push(['| ColomData2 |',"Data1","Data2","Data3-Layer2"]); //2-UrlIMG
      ArrDataImg.push(['| ColomData3 |',"Data1","Data2","Data3-Layer3"]); //3-UrlIMG

      var ArrFrame= [];  //DataFrame + DataLayer[Layer][IMGData]
      ArrFrame.push(['| Layer0 |',ArrDataImg[0][3],ArrDataImg[1][3],ArrDataImg[2][3],ArrDataImg[3][3]]);  //langsung ke data ke3 untuk update URL
    //ArrInhSatuFrame.push(['| frame1 |',ArrInhDuaLayerF1[0][3],ArrInhDuaLayerF1[1][3],ArrInhDuaLayerF1[2][3],ArrInhDuaLayerF1[3][3]]);  //INI-HARUS-BEDA-NamaArrayNYA
    //ArrInhSatuFrame.push(['| frame2 |',ArrInhDuaLayerF2[0][3],ArrInhDuaLayerF2[1][3],ArrInhDuaLayerF2[2][3],ArrInhDuaLayerF2[3][3]]);  //INI-HARUS-BEDA-NamaArrayNYA
      //ArrInhSatuFrame.push(['| frame3 |',ArrInhDuaLayer[0][3],ArrInhDuaLayer[1][3],ArrInhDuaLayer[2][3],ArrInhDuaLayer[3][3]]);  //INI-HARUS-BEDA-NamaArrayNYA

      //KEPALA DI MIRINGIN KE KIRI [BAYANGIN ITU TABLE]
      
      //jsonText = "Frame ke :" + ArrInhSatuFrame[0][0] + "Layer ke :" + ArrInhDuaLayer[0][3];
      jsonText = "Frame ke :" + ArrFrame[0][0] + "Layer ke :" + ArrFrame[0][1]; 
      //akses ke ArrInhSatuFrame[0][0] = frame0
      //akses ke ArrInhSatuFrame[0][1] = ArrDataImg[0][3] = z
      /*-------------------------------------------*/ 

       var Simg ;
       Simg = new Object();
       Simg.frameNum = 0;
       Simg.layer = [//layer
        "D1-|-Frame0-|-Layer0-|-0-0", 
        "D1-|-Frame0-|-Layer1-|-0-1", 
        "D1-|-Frame0-|-Layer2-|-0-2"
      ];
      Simg.layer[2]="UPDATE-Layer-0-2";
      Simg.layer[3]="NEW-Baru";
      Simg.UpdateArrDua = Simg.layer[2];
      Simg.AddArrKeTiga = Simg.layer[3];
      Simg.inherObj = {data:{0:{0:{0:"ExampleDataImg"}}} };
       
       var AP;
       AP = new Array();
       AP[0]= "frameNum";
       AP[1]= "layer"; 
       AP[2]= "UpdateArrDua";
       AP[3]= "AddArrKeTiga";
       AP[4]= "inherObj";

       
       //jsonText = JSON.stringify(Simg, AP, "\t"); 
       //jsonText = memangill; 
       //jsonText = update_inhObj;
       /*-------------------------------------------*/

        mfDua=[//Frame0
                [//layer
                  "D1-|-Frame0-|-Layer0-|-0-0", 
                  "D1-|-Frame0-|-Layer1-|-0-1", 
                  "D1-|-Frame0-|-Layer2-|-0-2"
                ],
               //Frame1
                [//layer
                  "D2-|-Frame1-|-Layer0-|-1-0", 
                  "D2-|-Frame1-|-Layer1-|-1-1", 
                  "D2-|-Frame1-|-Layer2-|-1-2"
                ]
              ]; //work
        /*
        mfDua.push(2);
        mfDua[2].push(["f1-layer0","f1-layer1","f1-layer3",]);
        */
        
        PanggillmfDua=mfDua[0][1];
        console.log(mfDua[1][0]);
        

        mf= new Array();
        mf[0] = "ArrNol";
        mf[1] = "ArrSatu";
        mf[2] = "ArrDua";
        mf[3] = "3";

        //objTiga = new Object(mf);
        objTiga = new Object();
        objTiga.OBSatu = "kur";
        objTiga.OBDua = "ro";



        obj = new Object();
        obj.MenuSatu = "kursi";
        obj.MenuDua = "roda";

        contact = new Object();
        contact.firstname = "Jesper";
        contact.surname = "Aaberg";
        contact.phone = ["555-0100", "555-0120"];
        contact.arrOBJ = obj;
        contact.arrDua = mf;
        contact.arrTiga = objTiga;

        contact.arrEmpat = mfDua; //["D2-1", "D2-1"]
        contact.arrLima = PanggillmfDua;
        
        memberfilter = new Array();
        memberfilter[0] = "surname";
        memberfilter[1] = "phone";
        memberfilter[2] = "firstname";
        
        memberfilter[5] = "MenuSatu";
        memberfilter[6] = "MenuDua";
        memberfilter[3] = "arrOBJ";

        memberfilter[4] = "arrDua";

        memberfilter[7] = "OBSatu";
        memberfilter[8] = "OBDua";
        memberfilter[9] = "arrTiga";
        
        memberfilter[10] = "arrEmpat";
        memberfilter[11] = "arrLima";
        
        
        //jsonText = JSON.stringify(contact, memberfilter, "\t"); 

        //javascript object yang dijadikan JSON
        //object apa saja yg di ambil
        //selang diantara obj satu dengan yg lain

        //document.write(jsonText);

        /* jika data tidak mau berubah coba clear cache browser chrome */
  
        /*
        var x, txt = "";

        for (x in jsonText) {
            txt += jsonText[x] + " ";
          };
        */

        return jsonText;
        //return txt;
    }
  }
  
/*
  export class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
*/

  
