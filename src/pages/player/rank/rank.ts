import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayerService} from "../../../service/player.service";

/**
 * Generated class for the RankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html',
})
export class RankPage {
  rankPlays:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public playerService:PlayerService
  ) {
  }

  ionViewDidLoad() {
    this.playerService.selectRankPlayer().subscribe(res=>this.rankPlays=res);
  }

}
