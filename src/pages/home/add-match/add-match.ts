import { Component } from '@angular/core';
import {ModalController, NavController, ViewController} from 'ionic-angular';
import {ShowPlayerPage} from "../show-player/show-player";
import {MatchModel} from "../../../model/match.model";
@Component({
  selector: 'add-match',
  templateUrl: 'add-match.html'
})
export class AddMatchPage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController
  ,public matchModel:MatchModel
  ) {

  }
  openPlayerModal(index){
    let modal=this.modalCtrl.create(ShowPlayerPage,{ playerIndex: index });
    modal.present();
  }

}
