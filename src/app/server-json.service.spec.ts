import { TestBed } from '@angular/core/testing';

import { ServerJsonService } from './server-json.service';

describe('ServerJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerJsonService = TestBed.get(ServerJsonService);
    expect(service).toBeTruthy();
  });
});
