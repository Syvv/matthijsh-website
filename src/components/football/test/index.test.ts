import { mount } from "@vue/test-utils"
import Index from "../index.vue";

describe('When loading the football index', () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(Index, {});
  });

  it("should display 'hallo'", () => {
    expect(wrapper.text()).toContain("hallo");
  });
});

describe("When testing", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(Index, {});
  });

  it("should return 1 more than the input", () => {
    const expectedValue = 2;
    const value: number = wrapper.vm.test(1);

    expect(value).toEqual(expectedValue);
  })
})