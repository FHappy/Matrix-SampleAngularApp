import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { AppFooterComponent } from './app-footer.component';
import { APP_STORES } from '../../app.stores';

describe('AppFooterComponent', () => {
  let component: AppFooterComponent;
  let fixture: ComponentFixture<AppFooterComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterComponent ],
      imports: [
        StoreModule.provideStore(APP_STORES)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
