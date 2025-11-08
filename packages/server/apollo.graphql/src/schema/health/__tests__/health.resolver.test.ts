import { resolvers } from '../health.resolver';

describe('health', () => {
  it('status OK', () => {
    expect(resolvers.Query.health()).toEqual('OK');
  });
});
