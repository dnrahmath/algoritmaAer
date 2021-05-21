class Car {
  constructor(brand) {
    this.carname = brand;
    
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

//export class Model extends Car {
//  constructor(brand, mod) {
//    super(brand);
//    this.model = mod;
//  }
//  show() {
//    return this.present() + ', it is a ' + this.model;
//  }
//}

class Model extends Car {          //Class Model Memanggil seluruh function pada Class Car
  constructor(brand, mod) {
    super(brand);
    var valueIsi;
    this.model = mod;
    //this.value = valueIsi;
  }
  show(valueIsi) {
    return this.present() + ', it is a ' + this.model + '---'+ valueIsi;
  }
}

export { Model };