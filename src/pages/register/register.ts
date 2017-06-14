import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PlayerModel} from "../../model/player.model";
import {PlayerService} from "../../service/player.service";
import {LoginPage} from "../login/login";
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

  constructor(public playerModel:PlayerModel,public playerService:PlayerService,
    public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.cityAlertOpts = {
      title: '选择城市',
      subTitle: '这是你的出生地'
    };
    playerModel.profile="assets/img/nonePhoto.jpg";
    playerModel.sex="男";
  }

  ionViewDidLoad() {

  }
  validAccount(){
    this.playerService.validAccount(this.playerModel).subscribe(res=>{
      if(res){
        let alert = this.alertCtrl.create({
          title: '账号已被注册',
          subTitle: '请更换其它账号',
          buttons: ['OK']
        });
        alert.present();
      }
    })

  }
  doRegister(){
    this.playerService.register(this.playerModel).subscribe(res=>{
      if(res){
        this.navCtrl.push(LoginPage);
      }else{
        let alertc = this.alertCtrl.create({
          title: '注册失败！',
          subTitle: '请重新注册',
          buttons: ['OK']
        });
        alertc.present();
      }
    });

  }

  upload(e){
    console.log(e);
   let files = e.target.files;
   for(let file of files){
     let reader = new FileReader ()
     reader.readAsDataURL(file);
     reader.onload=()=>{
       this.playerModel.profile=reader.result;
     }
   }
  }
}
