import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayerTabsPage} from "./player-tabs/player-tabs";


/**
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  rootPage=PlayerTabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
