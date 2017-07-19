/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import * as users from './users'
import * as account from './account'
const actions = {
  ...users,
  ...account
}
export default actions
