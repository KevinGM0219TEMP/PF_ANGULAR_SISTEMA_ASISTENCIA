import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarComponent } from './marcar.component';

describe('MarcarComponent', () => {
  let component: MarcarComponent;
  let fixture: ComponentFixture<MarcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcarComponent]
    });
    fixture = TestBed.createComponent(MarcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
