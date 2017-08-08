import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';

import { AppStateActions } from '../../actionHandlers/appState.actions';
import { APP_STORES } from '../../app.stores';
import { MockAppStateActions } from '../../mocks/mock.appState.actions';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  let debugEl: DebugElement;
  let _router: Router;
  let _appStateActions: AppStateActions;
  let _store: any;

  class MockRouter {
    public navigate(commands: any[]): void {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ],
      imports: [
        StoreModule.provideStore(APP_STORES)
      ],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: AppStateActions, useClass: MockAppStateActions }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    _store = fixture.debugElement.injector.get(Store);
    _router = TestBed.get(Router);
    _appStateActions = TestBed.get(AppStateActions);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
