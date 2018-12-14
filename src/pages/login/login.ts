import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public dados = {
    user: "Admin",
    pass: "Admin",
  }

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  public goToPageMenu(): void{
    this.navCtrl.push(MenuPage)
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
    this.goToPageMenu();
  }

}
