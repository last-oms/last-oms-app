import { extTypescriptUuid } from './ext-typescript-uuid';

describe('extTypescriptUuid', () => {
  it('should work', () => {
    expect(extTypescriptUuid()).toEqual('ext-typescript-uuid');
  });
});
