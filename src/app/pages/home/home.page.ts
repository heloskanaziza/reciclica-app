import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Impor Router untuk navigasi

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  hasHeader: boolean = true;  // Add this property
  hasFooter: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPickupCalls() {
    this.router.navigate(['/pickup-calls']);
  }

  newToPickupCall(){
    this.router.navigate(['/pickup-call']);
  }
}
