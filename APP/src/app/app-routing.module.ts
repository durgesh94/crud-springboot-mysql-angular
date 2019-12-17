import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ViewComponent } from "./view/view.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./_utilities/common/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "view", component: ViewComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "404", component: PageNotFoundComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [
  ViewComponent,
  LoginComponent,
  RegisterComponent,
  PageNotFoundComponent
];
