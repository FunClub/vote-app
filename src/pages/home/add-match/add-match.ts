import { Component } from '@angular/core';
import {AlertController, ModalController, NavController, ViewController} from 'ionic-angular';
import {ShowPlayerPage} from "../show-player/show-player";
import {MatchModel} from "../../../model/match.model";
import {MatchService} from "../../../service/match.service";
@Component({
  selector: 'add-match',
  templateUrl: 'add-match.html'
})
export class AddMatchPage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController
  ,public matchModel:MatchModel,public matchService:MatchService,public alerCtr:AlertController
  ) {

  }
  openPlayerModal(index){
    let modal=this.modalCtrl.create(ShowPlayerPage,{ playerIndex: index });
    modal.present();
  }
  addMatch(){
    this.matchService.addMatch(this.matchModel).subscribe(res=>{
      let alertc=this.alerCtr.create({
        buttons:['确定']
      });
      if(res){
        alertc.setSubTitle("添加比赛成功");
      }else{
        alertc.setSubTitle("添加比赛失败");
      }
      alertc.present();
    });
  }
}
