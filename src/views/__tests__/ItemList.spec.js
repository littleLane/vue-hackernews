/*
 * @Author: qianzhi
 * @Date: 2022-04-17 22:13:11
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-17 22:15:44
 * @FilePath: /vue-hackernews/src/views/__tests__/ItemList.spec.js
 */
import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'

describe('ItemList.vue', () => {
  test('renders an Item with data for each item in window.items', () => {
    window.items = [{}, {}, {}]
    const wrapper = shallowMount(ItemList)
    const items = wrapper.findAllComponents(Item)
    expect(items).toHaveLength(window.items.length)
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    })
  })
})
