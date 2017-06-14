import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {PlayerModel} from "../../model/player.model";
import {PlayerService} from "../../service/player.service";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public playerModel:PlayerModel,public playerService:PlayerService,
    public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }
  doLogin(){
    this.playerService.login(this.playerModel).subscribe(res=>{
      if(res){
        this.navCtrl.push(HomePage);
      }else{
        let alert = this.alertCtrl.create({
          title: '账号或密码错误！',
          subTitle: '请重新输入',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }
  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
