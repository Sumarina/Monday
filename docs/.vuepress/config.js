module.exports = {
  title: '今天星期一',
  description: '不积跬步无以至千里',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'JavaScript学习', link: '/JavaScript/0410' },
      { text: 'css了解', link: '/css/0409' },
      { text: '算法练习', link: '/algorithm/climbStairs' },
      { text: '博客', link: '/blog/slider' },
      { text: 'Github', link: 'https://github.com/Sumarina/Monday' },
    ],
    sidebar: {
      '/JavaScript/': ['0410', '0411', '0417', '0418', '0419', '0429', '0503', '0505','0526'],
      '/css/': ['0409'],
      '/algorithm/': ['climbStairs'],
      '/blog/': ['slider','0519'],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
