import {createStore} from 'redux';
const hourCounter= (state={counter:0}, action)=>{
    if(action.type==='increase'){
        return {
            counter:state.counter+1,
        }
    }
    if(action.type==='stop'){
        return {
            counter:state.counter,
        }
    }
    if(action.type==='reset'){
        return {
            counter:0,
        }
    }
    return state
}
const store= createStore(hourCounter);
export default store;