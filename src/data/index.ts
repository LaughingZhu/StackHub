/*
 * @Date: 2024-10-28 13:56:17
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-30 16:02:25
 * @Description:
 */
import bundlerArr from './bundler';
import reactArr from './react';
import uiArr from './ui';
import vueArr from './vue';

export default [
  {
    name: 'react',
    children: reactArr
  },
  {
    name: 'vue',
    children: vueArr
  },
  {
    name: 'ui',
    children: uiArr
  },
  {
    name: 'builder',
    children: bundlerArr
  }
];
