/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 16:04:25
 * @Description:
 */
import { DateCategory } from '@/types/data';
export default [
  {
    name: 'Vue',
    desc_zh: '渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富的 Web 前端框架。。',
    home: 'https://cn.vuejs.org/',
    category: DateCategory.Framework,
    logo: 'https://cn.vuejs.org/logo.svg',

    repoInfo: {
      github: 'https://github.com/vuejs/t',
      stars: '47.4k',
      forks: '8.3k',
      owner: 'Vue'
    }
  },
  {
    name: 'Nuxt',
    desc_zh:
      'NuxtJS 让你构建你的下一个 Vue.js 应用程序变得更有信心。这是一个 开源 的框架，让 web 开发变得简单而强大。',
    home: 'https://nuxt.com/',
    category: DateCategory.Framework,
    logo: 'https://nuxt.com/icon.png',

    repoInfo: {
      github: 'https://github.com/nuxt/nuxt',
      stars: '54.7k',
      forks: '5k',
      owner: 'Nuxt'
    }
  },
  {
    name: 'PrimeVue',
    desc_zh:
      'PrimeVue 是一个基于Vue.js 的UI 组件库，专注于提供丰富、灵活、现代的UI 组件，以帮助开发者构建功能强大的Web 应用程序。',
    home: 'https://primevue.org/',
    category: DateCategory.Ui,
    logo: 'https://primevue.org/favicon.ico',

    repoInfo: {
      github: 'https://github.com/primefaces/primevue',
      stars: '10.4k',
      forks: '1.2k',
      owner: 'PrimeTek'
    }
  }
];
