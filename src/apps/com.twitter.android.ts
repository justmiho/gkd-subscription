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
      activityIds: [
        'com.x.android.main.MainActivity'
      ],
      rules: 'TextView[text="显示"] + Button',
      snapshotUrls: [
        'https://i.gkd.li/i/29028933',
        'https://i.gkd.li/i/29028935',
      ],
    }
  ],
});
