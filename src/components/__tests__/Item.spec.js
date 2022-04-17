/*
 * @Author: qianzhi
 * @Date: 2022-04-17 21:56:32
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-17 22:04:51
 * @FilePath: /vue-hackernews/src/components/__tests__/Item.spec.js
 */
import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders item', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.text()).toContain('item')
    expect(wrapper.isVisible()).toBeTruthy()
  })

  test('renders item with DIV', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.element.tagName).toBe('DIV')
  })
})
