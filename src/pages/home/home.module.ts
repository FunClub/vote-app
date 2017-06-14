import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {FormsModule} from "@angular/forms";
import {HomePage} from "./home";
import {AddMatchPage} from "./add-match/add-match";
import {TabsPage} from "./tabs/tabs";
import {ManageMatchPage} from "./manage-match/manage-match";
import {ShowPlayerPage} from "./show-player/show-player";
import {MatchModel} from "../../model/match.model";

@NgModule({
  declarations: [
    HomePage,AddMatchPage,TabsPage,ManageMatchPage,ShowPlayerPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    FormsModule
  ],
  exports: [
   HomePage,AddMatchPage,TabsPage,ManageMatchPage,ShowPlayerPage
  ],
  providers:[MatchModel]
})
export class HomePageModule {}
