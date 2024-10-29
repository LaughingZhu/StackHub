/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 15:53:56
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
  }
];
