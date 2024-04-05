import { defineConfig } from 'vitepress'
import categories from './categories'

const jsScripts: any[] = [];
const scripts = jsScripts?.map(it => {
  if (it?.type === "src") {
    return [
      'script',
      { async: '', src: it?.src }
    ];
  } else if (it?.type === "text") {
    return [
      'script',
      {},
      it?.content
    ]
  } else {
    return null;
  }
}).filter(Boolean);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/bigfed_notes_vp/",
  title: "小磊哥er的大前端学习笔记",
  description: "小磊哥er的大前端学习笔记",
  srcDir: "./docs",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "大前端书籍,大前端学习笔记,小磊哥er的博客" }],
    ...(scripts as any[])
  ],
  sitemap: {
    hostname: `https://www.yzsunlei.com/bigfed_notes_vp/`
  },
  themeConfig: {
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "所有分类",
    outline: {
      level: 3,
      label: "本篇导航"
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

    nav: [
      {
        text: "首页",
        link: "/",
      },
      ...categories,
      {
        text: "返回主站",
        link: "https://www.yzsunlei.com",
      }
    ],

    sidebar: [
      ...categories
    ],

    footer: {
      copyright: "MIT Licensed | Copyright © 2024-present 小磊哥er"
    }
  }
})
