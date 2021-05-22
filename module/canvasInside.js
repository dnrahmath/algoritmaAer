  class Model {          //Class Model Memanggil seluruh function pada Class Car
    constructor(variabelSave) {
      //this.elemCanvas = canvasId;
      //this.getContext = contextCanvas;

      var interval;

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



    //--- Start --- atas Kondisi
    //function tidak perlu dituliskan kembali didepan
    statusAwal(elemKondisiId, statusJSONId) {
      //var golang = this.data; tidak bisa
      var golang = 5;  
      //this.data = "empat";
      this.data = golang;
      return elemKondisiId + ', it is a ' + statusJSONId + " " + this.UjiSave + " " + this.data +golang;
    }
  }
  
  export { Model };





