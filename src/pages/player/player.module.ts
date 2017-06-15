import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerPage } from './player';
import {PlayerTabsPage} from "./player-tabs/player-tabs";
import {VotePage} from "./vote/vote";
import {RankPage} from "./rank/rank";
import {AboutPage} from "./about/about";
import {PlayerInfoPage} from "./player-info/player-info";
import {VsComponent} from "./vs/vs";


@NgModule({
  declarations: [
    PlayerPage,
    PlayerTabsPage,
    VotePage,
    RankPage,
    AboutPage,
    PlayerInfoPage,
    VsComponent
  ],
  imports: [
    IonicPageModule.forChild(PlayerPage),

  ],
  exports: [
    PlayerPage, PlayerTabsPage,VotePage,
    RankPage,
    AboutPage,
    PlayerInfoPage,
    VsComponent
  ],
  entryComponents:[PlayerInfoPage]
})
export class PlayerPageModule {}
