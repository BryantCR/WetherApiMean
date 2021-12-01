import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanjoseCComponent } from './sanjose-c.component';

describe('SanjoseCComponent', () => {
  let component: SanjoseCComponent;
  let fixture: ComponentFixture<SanjoseCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanjoseCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanjoseCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
