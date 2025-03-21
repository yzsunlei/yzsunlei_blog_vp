import { defineConfig } from "vitepress";

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
  title: "小磊哥er的博客",
  description: "专注于大前端和大数智相关技术",
  srcDir: "./docs",
  outDir: "dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      { name: "keywords", content: "大数智书籍,大数智学习笔记,小磊哥er的博客" },
    ],
    ...(scripts as any[]),
  ],
  sitemap: {
    hostname: `https://www.yzsunlei.com/`,
  },
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "大前端",
        items: [
          { text: "大前端学习笔记", link: "/bigfed_notes_vp/index.html", target: "blank" },
          { text: "大前端技术导航", link: "/bigfed_nav_vp/index.html", target: "blank" },
          { text: "大前端Serverless专题", link: "/bigfed_serverless_vp/index.html", target: "blank" },
        ],
      },
      {
        text: "大数智",
        items: [
          { text: "大数智学习笔记", link: "/bigdata_notes_vp/index.html", target: "blank" },
          { text: "大数智技术导航", link: "/bigdata_nav_vp/index.html", target: "blank" },
          { text: "大数智办公自动化专题", link: "/bigdata_automation_vp/index.html", target: "blank" },
        ],
      },
      {
        text: "软技能",
        items: [
          { text: "软技能学习笔记", link: "/softskill_notes_vp/index.html", target: "blank" },
        ],
      },
      {
        text: "更多链接",
        items: [
          { text: "旧版博客(2023版)", link: "http://www.yzsunlei.com/index-2023.html", target: "blank" },
          { text: "旧版博客(2020版)", link: "http://2020.yzsunlei.com/", target: "blank" },
          { text: "旧版前端笔记(2020版)", link: "http://notes.yzsunlei.com/", target: "blank" },
          { text: "《JavaScript并发编程》书籍翻译", link: "https://javascript-concurrency.gitbook.io/javascript-concurrency", target: "blank" },
        ],
      },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yzsunlei" },
    ],

    footer: {
      copyright: "MIT Licensed | Copyright © 2024-present 小磊哥er ｜ <a href='https://beian.miit.gov.cn/' target='_blank'>鄂ICP备14015590号-8</a>",
    },
  },
});
