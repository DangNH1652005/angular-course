import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sinal } from './sinal';

describe('Sinal', () => {
  let component: Sinal;
  let fixture: ComponentFixture<Sinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sinal],
    }).compileComponents();

    fixture = TestBed.createComponent(Sinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
