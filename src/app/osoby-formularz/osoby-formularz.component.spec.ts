import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobyFormularzComponent } from './osoby-formularz.component';

describe('OsobyFormularzComponent', () => {
  let component: OsobyFormularzComponent;
  let fixture: ComponentFixture<OsobyFormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobyFormularzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobyFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
