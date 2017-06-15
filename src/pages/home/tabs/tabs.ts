import { Component } from '@angular/core';
import {AddMatchPage} from "../add-match/add-match";
import {ManageMatchPage} from "../manage-match/manage-match";
import {RankPage} from "../../player/rank/rank";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  addMatchPage=AddMatchPage;
  manageMatchPage = ManageMatchPage;
  rankPage:RankPage;
  constructor() {

  }
}
