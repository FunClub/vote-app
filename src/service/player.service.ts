
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {PlayerModel} from "../model/player.model";
@Injectable()
export class PlayerService{
  constructor(private http:Http){
  }
  login(playModel:PlayerModel):Observable<boolean>{
    return this.http.post("login",playModel).map(res=>res.json());
  }
  validAccount(playModel:PlayerModel):Observable<boolean>{
    return this.http.post("api/account",playModel).map(res=>res.json());
  }

  register(playModel:PlayerModel):Observable<boolean>{
    return this.http.post("api/player",playModel).map(res=>res.json());
  }
}