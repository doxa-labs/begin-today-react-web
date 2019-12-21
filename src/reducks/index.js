import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './modules'


const initialState = {}
const enhancers = []
const middleware = [
   thunk
]

const composedEnhancers = compose(
   applyMiddleware(...middleware),
   ...enhancers
)

const _store = createStore(
   rootReducer,
   initialState,
   composedEnhancers
)

let _persistor = persistStore(_store);

export const persistor = _persistor;
const store = _store;
export default store;