import { defineConfig } from 'vitepress'
import categories from "./categories";

const jsScripts: any[] = [
  {
    type: "text",
    content: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?b0564a411a912e4e7f133b80078eeeab";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `,
  },
];
const scripts = jsScripts
  ?.map((it) => {
    if (it?.type === "src") {
      return ["script", { async: "", src: it?.src }];
    } else if (it?.type === "text") {
      return ["script", {}, it?.content];
    } else {
      return null;
    }
  })
  .filter(Boolean);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/bigdata_automation_vp/",
  title: "小磊哥er的办公自动化专题",
  description: "小磊哥er的大数智办公自动化专题",
  srcDir: "./docs",
  outDir: "dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "办公自动化,小磊哥er的大数智办公自动化专题,大数智技术博客,小磊哥er,小磊哥er的博客",
      },
    ],
    ...(scripts as any[]),
  ],
  sitemap: {
    hostname: `https://www.yzsunlei.com/bigdata_automation_vp/`,
  },
  themeConfig: {
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "所有分类",
    outline: {
      level: [2, 3],
      label: "本篇导航",
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
      },
    ],

    sidebar: [
      {
        text: "写在前面",
        link: "/preface.html",
      },
      ...categories,
      {
        text: "写在后面",
        link: "/postscript.html",
      },
    ],

    footer: {
      copyright: "MIT Licensed | Copyright © 2024-present 小磊哥er ｜ <a href='https://beian.miit.gov.cn/' target='_blank'>鄂ICP备14015590号-8</a>",
    },
  }
})
