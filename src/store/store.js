import {createStore} from "redux";
import reducer from "../reducers/Listreducer"
const Store = createStore (reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;