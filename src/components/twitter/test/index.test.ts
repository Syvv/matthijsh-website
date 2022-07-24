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