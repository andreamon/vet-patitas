import {createStore, combineReducers} from 'redux';
import petReducer from './redux/index'

const rootReducer = combineReducers({
    pets: petReducer
})

export default function generateStore(){
    const store = createStore(rootReducer);
    return store;
}