// * These tests ensure the exported types under test function as expected.

import { describe, expect, it } from 'tstyche';

describe('::todo', () => {
  it('todo', async () => {
    expect(undefined).type.toBe<undefined>();
  });
});
