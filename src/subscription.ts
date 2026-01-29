import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 3000,
  name: 'justmiho的订阅',
  version: 0,
  author: 'justmiho',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/justmiho/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
