/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 15:06:42
 * @Description:
 */
import { DateCategory } from '@/types/data';
export default [
  {
    name: 'Vue',
    desc_zh: '渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富的 Web 前端框架。。',
    home: 'https://cn.vuejs.org/',
    category: DateCategory.Framework,
    repoInfo: {
      github: 'https://github.com/vuejs/t',
      stars: '47.4k',
      forks: '8.3k',
      logo: 'https://cn.vuejs.org/logo.svg',
      owner: 'Vue'
    }
  },
  {
    name: 'Nuxt',
    desc_zh:
      'NuxtJS 让你构建你的下一个 Vue.js 应用程序变得更有信心。这是一个 开源 的框架，让 web 开发变得简单而强大。',
    home: 'https://nuxt.com/',
    category: DateCategory.Framework,
    repoInfo: {
      github: 'https://github.com/nuxt/nuxt',
      stars: '54.7k',
      forks: '5k',
      logo: 'https://nuxt.com/icon.png',
      owner: 'Nuxt'
    }
  }
];
