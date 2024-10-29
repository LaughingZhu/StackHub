/*
 * @Date: 2024-10-28 13:56:27
 * @LastEditors: LaughingZhu
 * @LastEditTime: 2024-10-29 21:48:02
 * @Description:
 */
import { DateCategory } from '@/types/data';
export default [
  {
    name: 'React',
    desc_zh: 'React 用于构建 Web 和原生交互界面的库。',
    home: 'https://react.dev/',
    category: DateCategory.Framework,
    logo: 'https://react.dev/favicon-32x32.png',
    repoInfo: {
      github: 'https://github.com/facebook/react',
      stars: '229k',
      forks: '46.8k',
      owner: 'Facebook'
    }
  },
  {
    name: 'Next',
    desc_zh:
      '一个构建于Node.js之上的开源Web开发框架，支持基于React的Web应用程序功能，例如服务端渲染和生成静态网站。',
    home: 'https://nextjs.org/',
    category: DateCategory.Framework,
    logo: 'https://nextjs.org/favicon.ico',
    repoInfo: {
      github: 'https://github.com/vercel/next.js',
      stars: '127k',
      forks: '26.9k',
      owner: 'Vercel'
    }
  },
  {
    name: 'Remix',
    desc_zh:
      'Remixjs 是由React Router 原班团队打造，基于TypeScript 与React，内建React Router V6 特性的全栈Web 框架',
    home: 'https://remix.run/',
    category: DateCategory.Framework,
    logo: 'https://remix.run/favicon-32.png',
    repoInfo: {
      github: 'https://github.com/remix-run/remix',
      stars: '29.8k',
      forks: '2.5k',
      owner: 'Remix'
    }
  },
  {
    name: 'Gatsby',
    desc_zh:
      'Gatsby 是一个基于React ，用于搭建静态站点的开源框架，用于帮助开发者构建运行速度极快的网站。',
    home: 'https://www.gatsbyjs.com/docs/quick-start/',
    category: DateCategory.Framework,
    logo: 'https://www.gatsbyjs.com/favicon-32x32.png',
    repoInfo: {
      github: 'https://github.com/gatsbyjs/gatsby',
      stars: '55.3k',
      forks: '10.3k',
      owner: 'Gatsby'
    }
  },
  {
    name: 'shadcn/ui',
    desc_zh: 'Shadcn UI是一个使用Radix UI 和Tailwind CSS 构建的可重用组件库',
    home: 'https://ui.shadcn.com/',
    logo: 'https://ui.shadcn.com/favicon.ico',
    category: DateCategory.Ui,
    repoInfo: {
      github: 'https://github.com/shadcn-ui/ui',
      stars: '73.2k',
      forks: '4.5k',
      owner: 'shadcn-ui'
    }
  },
  {
    name: 'Material UI',
    desc_zh:
      'Material UI 是一个开源 React 组件库，它实现了 Google 的 Material Design。它非常全面，可以开箱即用地用于生产。',
    home: 'https://github.com/mui/material-ui',
    category: DateCategory.Ui,
    logo: 'https://mui.com/static/favicon.ico',

    repoInfo: {
      github: 'https://github.com/mui/material-ui',
      stars: '93.8k',
      forks: '32.2k',
      owner: 'MUI'
    }
  },
  {
    name: 'NextUI',
    desc_zh:
      'NextUI 是漂亮、快速和现代的React UI 库。 无论你的设计经验如何，它都可以让你制作漂亮的网站。',
    home: 'https://nextui.org/',
    category: DateCategory.Ui,
    logo: 'https://nextui.org/favicon-32x32.png',
    repoInfo: {
      github: 'https://github.com/nextui-org/nextui',
      stars: '21.8k',
      forks: '1.5k',
      owner: 'NextUI Inc'
    }
  },
  {
    name: 'Aceternity UI',
    desc_zh:
      'Aceternity UI是一个前端UI组件库，它集合了大量独特、吸睛的网页交互效果，并以简单易用的形式呈现给开发者。',
    home: 'https://ui.aceternity.com/',
    category: DateCategory.Ui,
    logo: 'https://ui.aceternity.com/favicon.ico',
    repoInfo: {
      github: '',
      stars: '',
      forks: '',
      owner: 'NextUI Inc'
    }
  },
  {
    name: 'Magic UI',
    desc_zh:
      '使用 React、Typescript、Tailwind CSS 和 Framer Motion 构建的 50 多个免费开源动画组件。shadcn/ui 的完美伴侣。',
    home: 'https://magicui.design/',
    category: DateCategory.Ui,
    logo: 'https://magicui.design/favicon.ico',
    repoInfo: {
      github: 'https://github.com/magicuidesign/magicui',
      stars: '11k',
      forks: '431',
      owner: 'NextUI Inc'
    }
  }
];
