import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MediaMatcher } from "@angular/cdk/layout";

import { RoutingModule } from "./core/app-routing.module";
import { MaterialModule } from "./core/material.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { GeneralComponent } from "./general/general.component";
import { BusinessComponent } from "./business/business.component";

import { AuthGuard } from "./_guards/auth.guard";

import { AuthenticationService } from "./_services/auth.service";
import { UserService } from "./_services/user.service";
import { MemberService } from "./_services/member.service";
import { MemberComponent } from './general/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GeneralComponent,
    BusinessComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    MediaMatcher,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
