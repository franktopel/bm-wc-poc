import { flush, render } from '@stencil/core/testing';
import { BmCheckbox } from './bm-checkbox';

describe('bm-checkbox', () => {
  it('should build', () => {
    expect(new BmCheckbox()).toBeTruthy();
  });

  describe('rendering', () => {
    // let element;
    // beforeEach(async () => {
    //   element = await render({
    //     components: [BmCheckbox],
    //     html: '<my-component></my-component>'
    //   });
    // });
    //
    // it('should work without parameters', () => {
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    // });
    //
    // it('should work with a first name', async () => {
    //   element.first = 'Peter';
    //   await flush(element);
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    // });
    //
    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await flush(element);
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });
    //
    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter'
    //   element.last = 'Parker';
    //   await flush(element);
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});
