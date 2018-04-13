import { Component, OnInit } from "@angular/core";
import { MemberService } from "../../_services/member.service";
import { Member } from "../../_models/member.model";
import { MemberDataSource } from "./member.datasource";

@Component({
  selector: "app-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.scss"]
})
export class MemberComponent implements OnInit {
  //
  dataSource: MemberDataSource;
  private displayedColumns = [
    "firstName",
    "middleName",
    "lastName",
    "birthDate"
  ];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.dataSource = new MemberDataSource(this.memberService);
    this.dataSource.loadMembers();  }
}
