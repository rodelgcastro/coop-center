import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { AuthenticationService } from "../_services/auth.service";
import { Member } from "../_models/member.model";

@Injectable()
export class MemberService {
  private api: string = "https://coop-center.herokuapp.com/api";

  constructor(private http: Http) {}

  getMembers(): Observable<Member[]> {
    return this.http
      .get(this.api + "/member/list")
      .map((response: Response) => response.json());
  }
}
