/**
 * Created by Administrator on 2017/6/13.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {PlayerModel} from "../model/player.model";
@Injectable()
export class PlayerService{
  constructor(private http:Http){
  }
  getData():Observable<string>{
    return this.http.get("api/getData").map(res=>res.text());
  }
  validAccount(playModel:PlayerModel):Observable<boolean>{
    return this.http.post("api/account",playModel).map(res=>res.json());
  }
}
