import { createStore, applyMiddleware, compose } from 'redux'

// redux thuink sirve para trabajar con lñas llamadas asincronas
import thunk from 'redux-thunk'

import indexReducer from './store/reducer/index'

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = createStore(indexReducer,applyMiddleware(thunk))