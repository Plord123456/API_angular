import { Routes } from '@angular/router';
// import {ListCatsComponent} from "./pages/list-cats/list-cats.component";
import {ListProfilesComponent} from "../app/page/list-profiles/list-profiles/list-profiles.component";

export const routes: Routes = [
  // {
  //   path: "cat",
  //   component: ListCatsComponent
  // },
  {
    path: "profile",
    component: ListProfilesComponent
  }
];
