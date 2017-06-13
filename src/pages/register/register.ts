import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  cityAlertOpts: { title: string, subTitle: string };
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.cityAlertOpts = {
      title: '选择城市',
      subTitle: '这是你的出生地'
    };
  }

  ionViewDidLoad() {

  }
  doRegister(){
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });


  }
}
