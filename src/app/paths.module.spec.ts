import { PathsModule } from './paths.module';

describe('PathsModule', () => {
  let pathsModule: PathsModule;

  beforeEach(() => {
    pathsModule = new PathsModule();
  });

  it('should create an instance', () => {
    expect(pathsModule).toBeTruthy();
  });
});
