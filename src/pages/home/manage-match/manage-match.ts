import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {MatchService} from "../../../service/match.service";
@Component({
  selector: 'manage-match',
  templateUrl: 'manage-match.html'
})
export class ManageMatchPage{
  matchs:any[];
  constructor(public navCtrl: NavController,public matchService:MatchService,
  public alertCtr:AlertController
  ) {

  }
  ionViewDidLoad() {
    this.matchService.selectAllMatch().subscribe(res=>this.matchs=res);
  }
  toggleStatus(){
    alert(1);
  }
  deleteMatch(match:any){
    this.matchService.deleteMatch(match).subscribe(res=>{
      let alertc = this.alertCtr.create({
        buttons:['确定']
      });
      if(res){
        alertc.setSubTitle("删除成功");
        this.matchService.selectAllMatch().subscribe(res=>this.matchs=res);
      }else{
        alertc.setSubTitle("删除失败");
      }
      alertc.present();
    });
  }
}
