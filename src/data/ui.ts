/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 14:54:40
 * @Description:
 */
import { DateCategory } from '@/types/data';
export default [
  {
    name: 'shadcn/ui',
    desc_zh: 'Shadcn UI是一个使用Radix UI 和Tailwind CSS 构建的可重用组件库',
    home: 'https://ui.shadcn.com/',
    category: DateCategory.Ui,
    repoInfo: {
      github: 'https://github.com/shadcn-ui/ui',
      stars: '73.2k',
      forks: '4.5k',
      logo: 'https://ui.shadcn.com/favicon.ico',
      owner: 'shadcn-ui'
    }
  },
  {
    name: 'TailwindCSS',
    desc_zh:
      ' Tailwind CSS 是一个流行的CSS 框架，旨在帮助开发者快速构建现代化的、响应式的Web 界面。',
    home: 'https://tailwindcss.com/',
    category: DateCategory.Ui,
    repoInfo: {
      github: 'https://github.com/tailwindlabs/tailwindcss',
      stars: '82.8k',
      forks: '4.2k',
      logo: 'https://tailwindcss.com/favicons/favicon.ico',
      owner: 'Tailwind Labs'
    }
  }
];
