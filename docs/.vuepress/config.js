module.exports = {
  title: '今天星期一',
  description: '不积跬步无以至千里',
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '主页', link: '/' },
      { text: 'JavaScript学习', link: '/JavaScript/0410' },
      { text: 'css了解', link: '/css/0409' },
      { text: '算法练习', link: '/algorithm/climbStairs' },
      { text: '博客', link: '/blog/0519' },
      { text: 'Github', link: 'https://github.com/Sumarina/Monday' },
    ],
    sidebar: {
      '/JavaScript/': ['0410', '0411', '0417', '0418', '0419', '0429', '0503', '0505', '0526', '0612', '0619', '0628'],
      '/css/': ['0409'],
      '/algorithm/': ['climbStairs', '0622', '0624', '0629', 'moveZeroes', 'mostWater', 'preorderTraversal', 'preorder'],
      '/blog/': ['0519', '0610'],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
