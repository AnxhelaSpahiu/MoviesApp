import { combineReducers } from 'redux';


    import anxhiFirstReducer from './anxhiFirstReducer';
   


    const rootReducer = combineReducers({
        anxhis: anxhiFirstReducer,
    });

    export default rootReducer;