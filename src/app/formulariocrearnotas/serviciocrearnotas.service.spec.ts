import { TestBed } from '@angular/core/testing';

import { ServiciocrearnotasService } from './serviciocrearnotas.service';

describe('ServiciocrearnotasService', () => {
  let service: ServiciocrearnotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciocrearnotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
