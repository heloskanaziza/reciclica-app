import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

  @Input() hasHeader: boolean = true;
  @Input() hasFooter: boolean = false;

  @Input() status: string = '';  // Inisialisasi dengan string kosong
  @Input() updatedAt: string = '';  // Inisialisasi dengan string kosong
  @Input() createdAt: string = '';  // Inisialisasi dengan string kosong
  @Input() notes: string = '';  // Inisialisasi dengan string kosong
  @Input() value: string = '';  // Inisialisasi dengan string kosong


  constructor() {
    // Logika constructor (jika ada)
  }

  ngOnInit() {}

}
