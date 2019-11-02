import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import mainPageReducer from 'modules/MainPage/reducer'
import loginReducer from 'modules/Login/reducer'
import loginEpics from 'modules/Login/epics'
import getAuthenticatedApi from './api'
import profileEpics from 'modules/Profile/epics'
import profileReducer from 'modules/Profile/reducer'
import userInfoReducer from 'modules/UserInfo/reducer'
import userInfoEpics from 'modules/UserInfo/epics'
import mainPageEpics from 'modules/MainPage/epics'
import goldStandardReducer from 'modules/GoldStandard/reducer'
import gameReducer from 'modules/Game/reducer'
import goldStandardEpics from 'modules/GoldStandard/epics'
import gameEpics from 'modules/Game/epics'

const rootReducer = combineReducers({
  mainPageState: mainPageReducer,
  loginState: loginReducer,
  profileState: profileReducer,
  userInfoState: userInfoReducer,
  goldStandardState: goldStandardReducer,
  gameState: gameReducer,
})

const rootEpic = combineEpics(
  mainPageEpics,
  loginEpics,
  profileEpics,
  userInfoEpics,
  goldStandardEpics,
  gameEpics,
)

export default function initStore (initialState) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      publicApi: getAuthenticatedApi(),
      getAuthenticatedApi,
    }
  })
  const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

  const store = createStore(rootReducer, initialState, composeWithDevTools(reduxMiddleware,))
  epicMiddleware.run(rootEpic)

  return store
}
