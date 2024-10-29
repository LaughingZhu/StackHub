/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 14:54:33
 * @Description:
 */
import { DateCategory } from '@/types/data';
export default [
  {
    name: 'React',
    desc_zh: 'React 用于构建 Web 和原生交互界面的库。',
    home: 'https://react.dev/',
    category: DateCategory.Framework,
    repoInfo: {
      github: 'https://github.com/facebook/react',
      stars: '229k',
      forks: '46.8k',
      logo: 'https://react.dev/favicon-32x32.png',
      owner: 'Facebook'
    }
  },
  {
    name: 'Next',
    desc_zh:
      '一个构建于Node.js之上的开源Web开发框架，支持基于React的Web应用程序功能，例如服务端渲染和生成静态网站。',
    home: 'https://nextjs.org/',
    category: DateCategory.Framework,
    repoInfo: {
      github: 'https://github.com/vercel/next.js',
      stars: '127k',
      forks: '26.9k',
      logo: 'https://nextjs.org/favicon.ico',
      owner: 'Vercel'
    }
  },
  {
    name: 'Remix',
    desc_zh:
      'Remixjs 是由React Router 原班团队打造，基于TypeScript 与React，内建React Router V6 特性的全栈Web 框架',
    home: 'https://remix.run/',
    category: DateCategory.Framework,
    repoInfo: {
      github: 'https://github.com/remix-run/remix',
      stars: '29.8k',
      forks: '2.5k',
      logo: 'https://remix.run/favicon-32.png',
      owner: 'Remix'
    }
  }
];
