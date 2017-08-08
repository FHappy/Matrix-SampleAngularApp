import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStateActions } from '../../actionHandlers/appState.actions';
import { MockAppStateActions } from '../../mocks/mock.appState.actions';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugEl: DebugElement;
  let _appStateActions: AppStateActions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
      ],
      providers: [
        { provide: AppStateActions, useClass: MockAppStateActions }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    _appStateActions = TestBed.get(AppStateActions);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
