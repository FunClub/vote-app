import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";
import {RankPage} from "../rank/rank";
import {VotePage} from "../vote/vote";

/**
 * Generated class for the PlayerTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-player-tabs',
  templateUrl: 'player-tabs.html'
})
export class PlayerTabsPage {

  voteRoot = VotePage;
  rankRoot = RankPage;
  aboutRoot = AboutPage;

  constructor(public navCtrl: NavController) {}

}
