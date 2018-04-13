import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isLogin: boolean;
  mobile: MediaQueryList;

  private _mobileListener: () => void;

  constructor(
    router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        this.isLogin = event.url !== "/login";
      }
    });

    this.mobile = media.matchMedia("(max-width: 600px)");
    this._mobileListener = () => changeDetectorRef.detectChanges();
    this.mobile.addListener(this._mobileListener);
  }

  ngOnDestroy(): void {
    this.mobile.removeListener(this._mobileListener);
  }
}
