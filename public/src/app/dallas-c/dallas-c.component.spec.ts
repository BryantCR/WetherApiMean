import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DallasCComponent } from './dallas-c.component';

describe('DallasCComponent', () => {
  let component: DallasCComponent;
  let fixture: ComponentFixture<DallasCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DallasCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DallasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
