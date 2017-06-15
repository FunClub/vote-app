import {Component, Input} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from "ionic-angular";
import {MatchService} from "../../../service/match.service";
import {PlayerModel} from "../../../model/player.model";
import {PlayerInfoPage} from "../player-info/player-info";
import {MatchModel} from "../../../model/match.model";

/**
 * Generated class for the VsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'vs',
  templateUrl: 'vs.html'
})
export class VsComponent {
  @Input()
  match:MatchModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public matchService:MatchService,public modalController:ModalController,public alertCtr:AlertController
  ) {
  }

  ionViewDidLoad() {

  }

  addVote(match,index){
    let addVote;
    let playerName;
    if(index==1){
      match.vote1++;
      addVote={
        matchId:match.matchId,
        vote:match.vote1,
        index:index
      }
      playerName=match.player1.name;
    }else{
      match.vote2++;
      addVote={
        matchId:match.matchId,
        vote:match.vote2,
        index:index
      }
      playerName=match.player2.name;
    }
    this.matchService.updateMatch(addVote).subscribe(res=>{
      if(res){
        let al = this.alertCtr.create({
          title:playerName+":谢谢你",
          subTitle:"恭喜，投票成功!",
          buttons:["确定"]
        });
        al.present();
      }
    });
  }
  showPlayInfo(player:PlayerModel,song,vote){
    let modal=this.modalController.create(PlayerInfoPage,{
      player: player,
      song:song,
      vote:vote
    });
    modal.present();
  }

}
