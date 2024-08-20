import {Component} from '@angular/core';
import {CatState} from "../../ngrx/cat/cat.state";
import {Store} from "@ngrx/store";
import * as CatActions from "../../ngrx/cat/cat.action";
import {Observable} from "rxjs";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AsyncPipe} from "@angular/common";
import {CatCardComponent} from "../../compoments/cat-card/cat-card.component";



@Component({
  selector: 'app-list-cats',
  standalone: true,
  imports: [CatCardComponent, AsyncPipe, MatProgressBarModule],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.scss'
})
export class ListCatsComponent {
  cat$!: Observable<CatState>

  constructor(private store: Store<{ cat: CatState }>) {
    this.cat$ = this.store.select('cat')
    this.store.dispatch(CatActions.getAllCats({limit: 10}))
    this.cat$.subscribe(data => {
      console.log(data)
    })
  }

}
