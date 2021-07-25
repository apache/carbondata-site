import React from 'react';

export default {
  'zh-cn': {
    barText: '社区',
    sidemenu: [
      {
        title: '社区动态',
        children: [
          {
            title: '社区动态',
            link: '/zh-cn/community/index.html_xx',
          },
        ],
      },
      {
        title: '团队',
        children: [
          {
            title: '团队介绍',
            link: '/zh-cn/community/team.html_xx',
          },
        ],
      },
      {
        title: '安全',
        children: [
          {
            title: '安全介绍',
            link: '/zh-cn/community/security.html_xx',
          },
        ],
      },
      {
        title: '发版指南',
        children: [
          {
            title: '发版准备',
            link: '/zh-cn/community/release-prepare.html_xx',
          },
          {
            title: '发版指南',
            link: '/zh-cn/community/release.html_xx',
          },
          {
            title: '发版后续',
            link: '/zh-cn/community/release-post.html_xx',
          },
        ],
      },
      {
        title: '贡献指南',
        children: [
          {
            title: '如何成为CarbonData Committer',
            link: '/zh-cn/community/development/become-a-committer.html_xx',
          },
          {
            title: '订阅邮件列表',
            link: '/zh-cn/community/development/subscribe.html_xx',
          },
          {
            title: '参与贡献',
            link: '/zh-cn/community/development/contribute.html_xx',
          },
          {
            title: '行为准则',
            link: '/zh-cn/community/development/code-conduct.html_xx',
          },
        ],
      },
      {
        title: '提交者指南',
        children: [
          {
            title: '提交代码',
            link: '/zh-cn/community/development/submit-code.html_xx',
          },
          {
            title: 'License须知',
            link: '/zh-cn/community/development/XXX.html_xx',
          },
          {
            title: '文档须知',
            link: '/zh-cn/community/development/document.html_xx',
          },
          {
            title: 'Issue须知',
            link: '/zh-cn/community/development/issue.html_xx',
          },
          {
            title: 'Pull Request须知',
            link: '/zh-cn/community/development/pull-request.html_xx',
          },
          {
            title: 'Commit Message须知',
            link: '/zh-cn/community/development/commit-message.html_xx',
          },
          {
            title: '微基准测试须知',
            link: '/zh-cn/community/development/microbench.html_xx',
          },
          {
            title: '单元测试编写指南',
            link: '/zh-cn/community/development/unit-test.html_xx',
          },
        ],
      },
    ],
    events: {
      title: '事件 & 新闻',
      list: [
        {
          img: '/img/review_img4.png',
          title: 'CarbonData 开发者大会在北京成功举行',
          content: 'CarbonData 开发者大会在北京成功举行',
          dateStr: 'May 12nd，2018',
          link: '/zh-cn/development/architecture-design.html_xx',
        },
      ],
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过以下方式联系我们。',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: '邮件列表',
          link: 'mailto:dev-subscribe@carbondata.apache.org',
        },
        // {
        //   img: '/img/alibaba.png',
        //   imgHover: '/img/alibaba_hover.png',
        //   title: 'Gitter',
        //   link: 'https://gitter.im/apache/ApacheCarbonData',
        // },
        // {
        //   img: '/img/so-icon.png',
        //   imgHover: '/img/so-icon-hover.png',
        //   title: 'StackOverflow',
        //   link: 'https://stackoverflow.com/questions/tagged/apache-ApacheCarbonData'
        // },
        {
          img: '/img/twitter.png',
          imgHover: '/img/twitter_hover.png',
          title: '@CarbonData',
          link: 'https://twitter.com/CarbonData',
        },
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: 'CarbonData社区欢迎任何形式的贡献。',
      list: [
        {
          img: '/img/mailinglist.png',
          title: '邮件列表',
          content: <span>订阅 <a href="https://github.com/apache/carbondata/issues/1278">邮件列表 </a>参与讨论。</span>,
        },
        {
          img: '/img/issue.png',
          title: '报告缺陷',
          content: <span>通过<a href="https://github.com/apache/carbondata/issues"> GitHub issues </a>报告缺陷。</span>,
        },
        {
          img: '/img/documents.png',
          title: '文档',
          content: <span>优化CarbonData <a href="/zh-cn/docs/1.2.1/user_doc/quick-start.html"> 文档</a>。</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>提交 <a href="https://github.com/apache/carbondata/pulls"> Pull requests </a>来修复问题。</span>,
        },
      ],
    },
  },
};
