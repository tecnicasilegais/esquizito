import { getOffset, emptyOrRows } from 'utils/pagination.util';

describe('Helper Utils test', () => {
  describe('getOffset', () => {
    it('Should get the offset without params will return 0', () => {
      expect(getOffset()).toBe(0);
    });
    it('Should get the offset 0 for page 0 with 10 items per page', () => {
      expect(getOffset(0, 10)).toBe(0);
    });
    it('Should get the offset 11 for page 1 with 10 items per page', () => {
      expect(getOffset(1, 10)).toBe(10);
    });
  });

  describe('emptyOrRows', () => {
    it('Should get empty array if rows is empty', () => {
      expect(emptyOrRows()).toEqual([]);
    });
    it('Should get arrary if rows is filled', () => {
      expect(emptyOrRows([1])).toEqual([1]);
    });
  });
});
