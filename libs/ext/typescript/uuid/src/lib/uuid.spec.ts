import { UUID } from './uuid';

describe('UUID', () => {
  describe('.validate(input)', () => {
    it.each`
      input                                     | expected
      ${'594b9ca2-7e2c-4524-a598-073610fbca5b'} | ${true}
      ${''}                                     | ${false}
      ${'not-a-uuid'}                           | ${false}
    `('should return $expected with input $input', ({ input, expected }) => {
      expect(UUID.validate(input)).toBe(expected);
    });
  });

  describe('.create()', () => {
    it('should return a valid UUID', () => {
      expect(UUID.validate(UUID.create())).toBe(true);
    });
  });
});
