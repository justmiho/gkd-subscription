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
      activityIds: ['com.twitter.app.main.MainActivity', 'com.twitter.app.profiles.ProfileActivity'],
      rules: 'Button[text="显示"]',
      snapshotUrls: 'https://i.gkd.li/i/24929639',
    },
    {
      key: 0,
      name: '功能类-自动点击"是，查看个人资料"',
      desc: '点击个人资料警告的"是，查看个人资料"按钮',
      enable: false,
      fastQuery: true,
      activityIds: ['com.twitter.app.profiles.ProfileActivity'],
      rules: 'Button[text="是，查看个人资料"]',
      snapshotUrls: 'https://i.gkd.li/i/24929639',
    },
  ],
});
