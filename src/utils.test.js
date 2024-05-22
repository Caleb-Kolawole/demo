// utils.test.js
import { timestampConverter } from './utils';

describe('timestampConverter', () => {
  it('converts a Unix timestamp to a formatted date string', () => {
    const timestamp = 1715281800000;
    const expectedDate = '09-05-24'; // Expected output based on the given timestamp
    
    const result = timestampConverter(timestamp);
    
    expect(result).toEqual(expectedDate);
  });
});
