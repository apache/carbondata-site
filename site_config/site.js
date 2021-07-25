// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'CarbonData.apache.org', // 站点部署域名，无需协议和path等
  copyToDist: ['asset', 'img', 'file', '.asf.yaml', 'sitemap.xml', '.nojekyll', '.htaccess'], // 当build发布时，需要额外复制到dist目录的资源，默认有：index.html, 404.html, zh-cn, zh-cn, build
  docsLatest: '1.3.6', // docs的最新版本，当docs有多个版本时支持latest访问，空则不启用此特性
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/1.2.1/user_doc/quick-start.html',
        children: [
          {
            key: 'docs0',
            text: 'latest(1.2.1)',
            link: '/zh-cn/docs/1.2.1/user_doc/quick-start.html',
          },
          {
            key: 'docs136',
            text: '1.2.0',
            link: '/zh-cn/docs/1.2.0/user_doc/quick-start.html',
          },
        ],
      },
      {
        key: 'download',
        text: '下载',
        link: '/zh-cn/download/download.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'development',
        text: '开发者',
        link: '/zh-cn/development/development-environment-setup.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
      {
        key: 'ASF',
        text: 'ASF',
        target: '_blank',
        link: 'https://www.apache.org/',
        children: [
          {
            key: 'Foundation',
            text: 'Foundation',
            target: '_blank',
            link: 'https://www.apache.org/',
          },
          {
            key: 'License',
            text: 'License',
            target: '_blank',
            link: 'https://www.apache.org/licenses/',
          },
          {
            key: 'Events',
            text: 'Events',
            target: '_blank',
            link: 'https://www.apache.org/events/current-event',
          },
          {
            key: 'Security',
            text: 'Security',
            target: '_blank',
            link: 'https://www.apache.org/security/',
          },
          {
            key: 'Sponsorship',
            text: 'Sponsorship',
            target: '_blank',
            link: 'https://www.apache.org/foundation/sponsorship.html',
          },
          {
            key: 'Thanks',
            text: 'Thanks',
            target: '_blank',
            link: 'https://www.apache.org/foundation/thanks.html',
          },
        ],
      },
    ],
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/development/architecture-design.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/latest/user_doc/quick-start.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/development/backend-development.html',
        },
      ],
    },
    asf: {
      title: 'ASF',
      list: [
        {
          text: '基金会',
          link: 'http://www.apache.org',
        },
        {
          text: '证书',
          link: 'http://www.apache.org/licenses/',
        },
        {
          text: '事件',
          link: 'http://www.apache.org/events/current-event',
        },
        {
          text: '赞助',
          link: 'http://www.apache.org/foundation/sponsorship.html',
        },
        {
          text: '致谢',
          link: 'http://www.apache.org/foundation/thanks.html',
        },
      ],
    },
    contact: {
      title: '联系我们',
      content: '有问题需要反馈？请通过以下方式联系我们。',
      list: [
        {
          name: '邮件列表',
          img1: '/img/emailgray.png',
          img2: '/img/emailblue.png',
          link: '/zh-cn/community/development/subscribe.html',
        },
        {
          name: 'Twitter',
          img1: '/img/twittergray.png',
          img2: '/img/twitterblue.png',
          link: 'https://twitter.com/carbondata',
        },
        {
          name: 'Stack Overflow',
          img1: '/img/stackoverflow.png',
          img2: '/img/stackoverflow-selected.png',
          link: 'https://stackoverflow.com/questions/tagged/apache-CarbonData',
        },
        {
          name: 'Slack',
          img1: '/img/slack.png',
          img2: '/img/slack-selected.png',
          link: 'https://join.slack.com/t/asf-CarbonData/shared_invite/zt-omtdhuio-_JISsxYhiVsltmC5h38yfw',
        },
      ],
    },
    copyright: 'Copyright © 2019-2021 The Apache Software Foundation. Apache CarbonData, CarbonData, and its feather logo are trademarks of The Apache Software Foundation.',
  },
};
