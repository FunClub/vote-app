import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FormsModule} from "@angular/forms";
import {HomePage} from "./home";
import {AddMatchPage} from "./add-match/add-match";
import {TabsPage} from "./tabs/tabs";
import {ManageMatchPage} from "./manage-match/manage-match";
import {ShowPlayerPage} from "./show-player/show-player";
import {MatchModel} from "../../model/match.model";
import {MatchService} from "../../service/match.service";
import {PlayerPageModule} from "../player/player.module";

@NgModule({
  declarations: [
    HomePage,AddMatchPage,TabsPage,ManageMatchPage,ShowPlayerPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    FormsModule,
    PlayerPageModule
  ],
  exports: [
   HomePage,AddMatchPage,TabsPage,ManageMatchPage,ShowPlayerPage
  ],
  providers:[MatchModel,MatchService]
})
export class HomePageModule {}
