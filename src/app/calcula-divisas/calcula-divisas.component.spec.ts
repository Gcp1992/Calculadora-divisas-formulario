import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaDivisasComponent } from './calcula-divisas.component';

describe('CalculaDivisasComponent', () => {
  let component: CalculaDivisasComponent;
  let fixture: ComponentFixture<CalculaDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculaDivisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculaDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
