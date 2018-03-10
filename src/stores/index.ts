import { createBrowserHistory } from 'history';

import { RouterStore } from './RouterStore'
import { AccountStore } from './AccountStore'

import { STORE_ROUTER, STORT_ACCOUNT } from 'constants/stores'

const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const accountStore = new AccountStore();

const rootStores = {
  [STORE_ROUTER]: routerStore,
  [STORT_ACCOUNT]: accountStore
};

export default rootStores

export {
  RouterStore,
  AccountStore
}