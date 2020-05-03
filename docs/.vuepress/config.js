module.exports = {
  title: '今天星期一',
  description: '不积跬步无以至千里',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'JavaScript学习', link: '/JavaScript/' },
      { text: 'css了解', link: '/css/' },
      { text: '算法练习', link: '/algorithm/' },
      { text: 'Github', link: 'https://github.com/Sumarina/Monday' },
    ],
    sidebar: {
      '/JavaScript/': ['', '0410', '0411', '0417', '0418', '0419', '0429'],
      '/css/': ['', '0409'],
      '/algorithm/': ['', 'climb'],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
