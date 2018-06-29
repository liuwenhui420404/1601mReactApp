import {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
export {default as actions} from "./actions"
export * from "./type"
import reducer from "./reducer"

export default createStore(reducer,applyMiddleware(thunk))
