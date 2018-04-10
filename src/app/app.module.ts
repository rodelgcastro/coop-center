import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoutingModule } from "./core/app-routing.module";
import { MaterialModule } from "./core/material.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./_guards/auth.guard";
import { AuthenticationService } from "./_services/auth.service";
import { UserService } from "./_services/user.service";

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [AuthGuard, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
