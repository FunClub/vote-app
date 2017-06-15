import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayerModel} from "../../../model/player.model";
import {PlayerService} from "../../../service/player.service";

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  play:PlayerModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public playerService:PlayerService
  ) {
  }

  ionViewDidLoad() {
    this.playerService.getPlayer().subscribe(res=>this.play=res);
  }

}
