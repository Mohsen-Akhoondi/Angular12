import { CfmModule } from './cfm.module';

describe('CfmModule', () => {
  let cfmModule: CfmModule;

  beforeEach(() => {
    cfmModule = new CfmModule();
  });

  it('should create an instance', () => {
    expect(cfmModule).toBeTruthy();
  });
});
