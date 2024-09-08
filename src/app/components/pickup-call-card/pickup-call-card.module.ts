import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PickupCallCardComponent],
  exports: [PickupCallCardComponent]  // Export the component if needed in other modules
})
export class PickupCallCardModule {}
