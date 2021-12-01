import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherapiComponent } from './wetherapi.component';

describe('WetherapiComponent', () => {
  let component: WetherapiComponent;
  let fixture: ComponentFixture<WetherapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetherapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WetherapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
