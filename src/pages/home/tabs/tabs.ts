import { Component } from '@angular/core';
import {AddMatchPage} from "../add-match/add-match";
import {ManageMatchPage} from "../manage-match/manage-match";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  addMatchPage=AddMatchPage;
  manageMatchPage = ManageMatchPage;
  constructor() {

  }
}
