import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public proveedor:Proveedor1Provider) {

  }
  recursos
  ionViewDidLoad(){
    this.proveedor.obtenerRecursos()
    .subscribe(
      (data)=> {this.recursos = data;},
      (error)=>{console.log(error);}
  )
  }

}
