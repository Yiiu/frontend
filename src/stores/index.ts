import { createBrowserHistory } from 'history';

import { RouterStore } from './RouterStore'
import { AccountStore } from './AccountStore'
import { UploadStore } from './UploadStore'
import { PictureStore } from './PictureStore'

import { STORE_ROUTER, STORT_ACCOUNT, STORT_UPLOAD, STORE_PICTURE } from 'constants/stores'

const history = createBrowserHistory();
const routerStore = new RouterStore(history);
const accountStore = new AccountStore();
const uploadStore = new UploadStore();
const pictureStore = new PictureStore();

const rootStores = {
  [STORE_ROUTER]: routerStore,
  [STORT_ACCOUNT]: accountStore,
  [STORT_UPLOAD]: uploadStore,
  [STORE_PICTURE]: pictureStore
};

export default rootStores

export {
  RouterStore,
  AccountStore,
  UploadStore,
  PictureStore
}