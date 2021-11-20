import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustbookingComponent } from './custbooking.component';

describe('CustbookingComponent', () => {
  let component: CustbookingComponent;
  let fixture: ComponentFixture<CustbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
