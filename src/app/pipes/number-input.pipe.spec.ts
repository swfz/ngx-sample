import { NumberInputPipe } from './number-input.pipe';

describe('NumberInputPipe', () => {
  const pipe = new NumberInputPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('900', () => {
    expect(pipe.transform(900)).toEqual('900');
  });
  it('1000', () => {
    expect(pipe.transform(1000)).toEqual('1,000');
  });
  it('1000000', () => {
    expect(pipe.transform(1000000)).toEqual('1,000,000');
  });
});
