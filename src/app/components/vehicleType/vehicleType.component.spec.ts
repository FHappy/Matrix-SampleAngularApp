import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppStateActions } from '../../actionHandlers/appState.actions';
import { APP_STORES } from '../../app.stores';
import { VehicleTypeComponent } from './vehicleType.component';

describe('VehicleTypeComponent', () => {
  let component: VehicleTypeComponent;
  let fixture: ComponentFixture<VehicleTypeComponent>;
  let _appStateActions: AppStateActions;
  let _route: ActivatedRoute;
  let _router: Router;
  let _store: any;
  let debugEl: DebugElement;

  class MockAppStateActions {
    public updateState(stateChanges): void {

    }
  }

  class MockActivatedRoute extends ActivatedRoute {
    constructor() {
      super();
      this.params = Observable.of({ id: 'S' });
    }
  }

  class MockRouter {
    public navigate(commands: any[]): void {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleTypeComponent],
      imports: [
        StoreModule.provideStore(APP_STORES)
      ],
      providers: [
        { provide: AppStateActions, useClass: MockAppStateActions },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: Router, useClass: MockRouter }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeComponent);
    component = fixture.componentInstance;
    _store = fixture.debugElement.injector.get(Store);
    _appStateActions = TestBed.get(AppStateActions);
    _route = TestBed.get(ActivatedRoute);
    _router = TestBed.get(Router);
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
