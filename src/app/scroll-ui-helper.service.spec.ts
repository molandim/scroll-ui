import { TestBed, inject } from '@angular/core/testing';

import { ScrollUiHelperService } from './scroll-ui-helper.service';

describe('ScrollUiHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollUiHelperService]
    });
  });

  it('should ...', inject([ScrollUiHelperService], (service: ScrollUiHelperService) => {
    expect(service).toBeTruthy();
  }));
});
