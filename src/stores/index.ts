import { createBrowserHistory } from 'history';

import { RouterStore } from './RouterStore'
import { TestStore } from './TestStore'
import { AccountStore } from './AccountStore'

import { STORE_ROUTER, STORT_TEST, STORT_ACCOUNT } from 'constants/stores'

const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const testStore = new TestStore(['1', '2', '3']);
const accountStore = new AccountStore();

const rootStores = {
  [STORE_ROUTER]: routerStore,
  [STORT_TEST]: testStore,
  [STORT_ACCOUNT]: accountStore
};

export default rootStores

export {
  RouterStore,
  TestStore,
  AccountStore
}