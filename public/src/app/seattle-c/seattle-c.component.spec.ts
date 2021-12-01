import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleCComponent } from './seattle-c.component';

describe('SeattleCComponent', () => {
  let component: SeattleCComponent;
  let fixture: ComponentFixture<SeattleCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeattleCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
