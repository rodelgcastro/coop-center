import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "../app.component";
import { LoginComponent } from "../login/login.component";
import { HomeComponent } from "../home/home.component";

import { AuthGuard } from "../_guards/auth.guard";
import { GeneralComponent } from "../general/general.component";
import { MemberComponent } from "../general/member/member.component";
import { BusinessComponent } from "../business/business.component";

const routes: Routes = [
  // { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  // { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "general", component: GeneralComponent },
  { path: "members", component: MemberComponent },
  { path: "business", component: BusinessComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
