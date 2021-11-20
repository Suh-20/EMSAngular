import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernexthomeComponent } from './customernexthome.component';

describe('CustomernexthomeComponent', () => {
  let component: CustomernexthomeComponent;
  let fixture: ComponentFixture<CustomernexthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomernexthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernexthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
