import { PokePipe } from "./poke.pipe";


describe('PokePipe', () => {
  it('create an instance', () => {
    const pipe = new PokePipe();
    expect(pipe).toBeTruthy();
  });
});
