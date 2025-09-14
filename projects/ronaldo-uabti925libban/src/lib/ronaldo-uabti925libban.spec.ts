import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonaldoUabti925libban } from './ronaldo-uabti925libban';

describe('RonaldoUabti925libban', () => {
  let component: RonaldoUabti925libban;
  let fixture: ComponentFixture<RonaldoUabti925libban>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RonaldoUabti925libban]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RonaldoUabti925libban);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
