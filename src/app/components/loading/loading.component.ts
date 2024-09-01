// src/app/components/loading/loading.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/AppState';
import { LoadingState } from 'src/store/loading/LoadingState';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loadingState$!: Observable<LoadingState>;  // Tandai dengan ! karena akan diinisialisasi di ngOnInit

  constructor(private store: Store<AppState>) { }  // Gunakan tipe AppState

  ngOnInit() {
    // Pilih state dari store menggunakan pemetaan fungsi
    this.loadingState$ = this.store.select(state => state.loading);
  }
}
