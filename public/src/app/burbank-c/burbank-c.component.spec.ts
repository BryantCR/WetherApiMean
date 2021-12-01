import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurbankCComponent } from './burbank-c.component';

describe('BurbankCComponent', () => {
  let component: BurbankCComponent;
  let fixture: ComponentFixture<BurbankCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurbankCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurbankCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
