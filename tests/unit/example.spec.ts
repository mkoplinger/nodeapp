import { shallowMount } from '@vue/test-utils'
import App from '@/app.vue'

describe('app.vue', () => {
  it('you shall pass', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find("span").text()).toBe("3")
  })
})

// describe('app.vue', () => {
//   it('you shall not pass', () => {
//     const wrapper = shallowMount(App);
//     expect(wrapper.find("span").text()).toBe("4")
//   })
// })