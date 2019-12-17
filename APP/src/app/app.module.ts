import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NotifierModule } from "angular-notifier";
import { NgbModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AppRoutingModule, RoutingComponents } from "./app-routing.module";

import { customNotifierOptions } from "./_utilities/custom/notifyOptions";
import { EmpModalComponent } from "./emp-modal/emp-modal.component";

@NgModule({
  declarations: [AppComponent, RoutingComponents, EmpModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  entryComponents: [EmpModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
