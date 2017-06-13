/**
 * @flow
 */

import { INCREMENT, DECREMENT } from './constants'
import type { Action } from './actions'

type State = number

function counter(state: State = 0, action: Action): State {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counter
export type { State }
