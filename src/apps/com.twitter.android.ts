import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 0,
      name: '功能类-自动点击"显示"',
      desc: '点击帖子警告内容的显示按钮',
      enable: false,
      fastQuery: true,
      activityIds: 'com.twitter.app.main.MainActivity',
      rules: 'Button[text="显示"]',
      snapshotUrls: 'https://i.gkd.li/i/24929639',
    },
  ],
});
