import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobySzczegolyComponent } from './osoby-szczegoly.component';

describe('OsobySzczegolyComponent', () => {
  let component: OsobySzczegolyComponent;
  let fixture: ComponentFixture<OsobySzczegolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobySzczegolyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobySzczegolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
