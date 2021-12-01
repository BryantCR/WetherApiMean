import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonCComponent } from './washington-c.component';

describe('WashingtonCComponent', () => {
  let component: WashingtonCComponent;
  let fixture: ComponentFixture<WashingtonCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingtonCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
