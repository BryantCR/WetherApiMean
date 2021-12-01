import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicagoCComponent } from './chicago-c.component';

describe('ChicagoCComponent', () => {
  let component: ChicagoCComponent;
  let fixture: ComponentFixture<ChicagoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChicagoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChicagoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
