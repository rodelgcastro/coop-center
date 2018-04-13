import { Observable, BehaviorSubject } from "rxjs";

import { DataSource } from "@angular/cdk/table";
import { Member } from "../../_models/member.model";
import { MemberService } from "../../_services/member.service";
import { CollectionViewer } from "@angular/cdk/collections";
import { catchError, finalize } from "rxjs/operators";
import { of } from "rxjs/observable/of";

export class MemberDataSource implements DataSource<Member> {
  private membersSubject = new BehaviorSubject<Member[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private memberService: MemberService) {}

  connect(collectionViewer: CollectionViewer): Observable<Member[]> {
    return this.membersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.membersSubject.complete();
    this.loadingSubject.complete();
  }

  loadMembers() {
    this.loadingSubject.next(true);

    this.memberService
      .getMembers()
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(members => this.membersSubject.next(members));
  }
}
