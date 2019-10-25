import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension';
import getConfig from "next/config";

import mainPageReducer from 'modules/MainPage/reducer'
import wordPairReducer from 'modules/WordPair/reducer'
import wordPairEpics from 'modules/WordPair/epics'
import annotationReducer from 'modules/Annotation/reducer'
import annotationEpics from 'modules/Annotation/epics'
import loginReducer from 'modules/Login/reducer'

const { publicRuntimeConfig } = getConfig();

const rootReducer = combineReducers({
  wordPairState: wordPairReducer,
  mainPageState: mainPageReducer,
  annotationState: annotationReducer,
  loginState: loginReducer,
})

const rootEpic = combineEpics(
  wordPairEpics,
  annotationEpics,
)

export default function initStore (initialState) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      apiBaseUrl: publicRuntimeConfig.apiBaseUrl,
    }
  })
  const logger = createLogger({ collapsed: true }) // log every action to see what's happening behind the scenes.
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

  const store = createStore(rootReducer, initialState, composeWithDevTools(reduxMiddleware,))
  epicMiddleware.run(rootEpic)

  return store
}
