import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatComponent } from './all-cat.component';

describe('AllCatComponent', () => {
  let component: AllCatComponent;
  let fixture: ComponentFixture<AllCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllCatComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
