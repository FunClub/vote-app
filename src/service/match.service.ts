/**
 * Created by Administrator on 2017/6/15.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {MatchModel} from "../model/match.model";
import {Observable} from "rxjs/Observable";
@Injectable()
export class MatchService{
  constructor(public http:Http){

  }
  deleteMatch(match:any):Observable<boolean>{
    return this.http.post("api/match/"+match.matchId,match).map(res=>res.json());
  }
  updateMatch(match:any):Observable<boolean>{
    return this.http.put("api/match",match).map(res=>res.json());
  }
  selectAllMatch():Observable<any[]>{
    return this.http.get("api/match").map(res=>res.json());
  }
  addMatch(matchModel:MatchModel):Observable<boolean>{
    return this.http.post("api/match",matchModel).map(res=>res.json());
  }
}
