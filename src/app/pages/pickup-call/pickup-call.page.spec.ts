import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupCallPage } from './pickup-call.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    }));

    it('should go to home on create new pickup call', () => {
      spyOn(router, 'navigate');

      component.newPickupCall();

      expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
    })
});
