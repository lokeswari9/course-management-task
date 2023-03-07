import { createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

const ConfigureStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}
export default ConfigureStore;