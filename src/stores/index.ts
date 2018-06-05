import { createBrowserHistory } from 'history';

import { RouterStore } from './RouterStore'
import { AccountStore } from './AccountStore'
import { UploadStore } from './UploadStore'

import { STORE_ROUTER, STORT_ACCOUNT, STORT_UPLOAD } from 'constants/stores'

const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const accountStore = new AccountStore();
const uploadStore = new UploadStore();

const rootStores = {
  [STORE_ROUTER]: routerStore,
  [STORT_ACCOUNT]: accountStore,
  [STORT_UPLOAD]: uploadStore
};

export default rootStores

export {
  RouterStore,
  AccountStore,
  UploadStore
}