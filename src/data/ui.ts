/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-30 11:05:58
 * @Description:
 */
import { DateCategory } from '@/types/data';
export default [
  {
    name: 'TailwindCSS',
    desc_zh:
      ' Tailwind CSS 是一个流行的CSS 框架，旨在帮助开发者快速构建现代化的、响应式的Web 界面。',
    home: 'https://tailwindcss.com/',
    category: DateCategory.Ui,
    logo: 'https://tailwindcss.com/favicons/favicon.ico',
    repoInfo: {
      github: 'https://github.com/tailwindlabs/tailwindcss',
      stars: '82.8k',
      forks: '4.2k',
      owner: 'Tailwind Labs'
    }
  },

  {
    name: 'UnoCSS',
    desc_zh:
      'UnoCSS 是一个即时原子化CSS引擎，它可以让你用简短的类名来控制元素的样式，而不需要写复杂的CSS代码。',
    home: 'https://unocss.dev/',
    category: DateCategory.Ui,
    logo: 'https://unocss.dev/favicon.svg',
    repoInfo: {
      github: 'https://github.com/unocss/unocss',
      stars: '16.5k',
      forks: '835',
      owner: 'UnoCSS'
    }
  },
  {
    name: 'HeadlessUI',
    desc_zh: '完全无样式、完全可访问的 UI 组件，旨在与 Tailwind CSS 完美集成。',
    home: 'https://headlessui.com/',
    category: DateCategory.Ui,
    logo: 'https://headlessui.com/favicon.ico',
    repoInfo: {
      github: 'https://github.com/tailwindlabs/headlessui',
      stars: '26k',
      forks: '1.1k',
      owner: 'Tailwind Labs'
    }
  },
  {
    name: 'ark',
    desc_zh: 'Ark UI 是一个无头库，用于构建可重用、可扩展的设计系统，适用于各种 JS 框架。',
    home: 'https://ark-ui.com/',
    category: DateCategory.Ui,
    logo: 'https://ark-ui.com/favicon.ico',
    repoInfo: {
      github: 'https://github.com/chakra-ui/ark',
      stars: '3.7k',
      forks: '103',
      owner: 'Chakra UI'
    }
  }
];
