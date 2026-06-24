import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatcardValues } from './statcard-values';

describe('StatcardValues', () => {
  let component: StatcardValues;
  let fixture: ComponentFixture<StatcardValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatcardValues],
    }).compileComponents();

    fixture = TestBed.createComponent(StatcardValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
