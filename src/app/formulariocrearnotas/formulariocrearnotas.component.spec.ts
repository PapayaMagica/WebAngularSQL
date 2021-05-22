import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocrearnotasComponent } from './formulariocrearnotas.component';

describe('FormulariocrearnotasComponent', () => {
  let component: FormulariocrearnotasComponent;
  let fixture: ComponentFixture<FormulariocrearnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariocrearnotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocrearnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
