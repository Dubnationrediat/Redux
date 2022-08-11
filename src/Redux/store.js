//  this will be out store


import {createStore} from 'redux'
import reducers from './Reducer/index.js'


const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;