/*
 * @Author: qianzhi
 * @Date: 2022-04-17 22:13:11
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-17 22:26:33
 * @FilePath: /vue-hackernews/src/components/__tests__/ProgressBar.spec.js
 */
import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {
  test('is hidden on initial render', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden') // #A
  })

  test('initializes with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%') // #A
  })

  test('render with DIV container', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.tagName).toBe('DIV') // #A
  })
})
