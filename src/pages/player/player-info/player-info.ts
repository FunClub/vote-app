import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {PlayerService} from "../../../service/player.service";
import {PlayerModel} from "../../../model/player.model";
import {MatchModel} from "../../../model/match.model";
@Component({
  selector: 'player-info',
  templateUrl: 'player-info.html'
})
export class PlayerInfoPage{
  play:PlayerModel;
  song:string;
  vote:number;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public params: NavParams,
  public playerService:PlayerService,public matchModel:MatchModel
  ) {
    this.play=params.get("player");
    this.song=params.get("song");
    this.vote=params.get("vote")
  }
  ionViewDidLoad() {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
