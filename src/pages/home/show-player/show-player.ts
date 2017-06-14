import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {PlayerService} from "../../../service/player.service";
import {PlayerModel} from "../../../model/player.model";
import {MatchModel} from "../../../model/match.model";
@Component({
  selector: 'show-player',
  templateUrl: 'show-player.html'
})
export class ShowPlayerPage{
  plays:PlayerModel[];
  playerIndex:number;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public params: NavParams,
  public playerService:PlayerService,public matchModel:MatchModel
  ) {
  this.playerIndex=this.params.get("playerIndex");
  this.playerIndex==1?this.matchModel.playId1=0:this.matchModel.playId2=0;
  }
  ionViewDidLoad() {
    this.playerService.selectAllPlayer().subscribe(res=>this.plays=res);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  setPlayerId(id){

    this.playerIndex==1?this.matchModel.playId1=id:this.matchModel.playId2=id;
  }
}
