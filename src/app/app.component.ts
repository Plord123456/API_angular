import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatService} from "./services/cat.service";
import {CatState} from "./ngrx/cat/cat.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as CatActions from "./ngrx/cat/cat.action";
import {ProfileService} from "./services/profile.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'api';

  constructor(public profileService: ProfileService,
    private catService : CatService, private store: Store<{cat : CatState}>) {}


}
