import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { AppStateActions } from '../../actionHandlers/appState.actions';
import { NotificationActions } from '../../actionHandlers/notification.actions';
import { UserActions } from '../../actionHandlers/user.actions';
import { APP_STORES } from '../../app.stores';
import { MockAppStateActions } from '../../mocks/mock.appState.actions';
import { PaymentTrxModalComponent } from './payment-trx-modal.component';

describe('PaymentTrxModalComponent', () => {
  let component: PaymentTrxModalComponent;
  let fixture: ComponentFixture<PaymentTrxModalComponent>;
  let debugEl: DebugElement;
  let _notificationActions: NotificationActions;
  let _appStateActions: AppStateActions;
  let _userActions: UserActions;

  class MockUserActions {
    public processPaymentTrx(paymentReq): void {

    }
  }

  class MockNotificationActions {
    public notifyError({ type, title, message }: { type: string, title: string, message: string }): void {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTrxModalComponent ],
      imports: [
        FormsModule,
        StoreModule.provideStore(APP_STORES)
      ],
      providers: [
        { provide: UserActions, useClass: MockUserActions },
        { provide: NotificationActions, useClass: MockNotificationActions },
        { provide: AppStateActions, useClass: MockAppStateActions }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTrxModalComponent);
    _notificationActions = TestBed.get(NotificationActions);
    _userActions = TestBed.get(UserActions);
    _appStateActions = TestBed.get(AppStateActions);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
