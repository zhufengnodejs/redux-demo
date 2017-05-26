import * as actionTypes from '../action-types';
export default function reducer(state={number:0},action){
    if(action ==undefined) return state;
    switch (action.type){
        case actionTypes.INCREASE1:
            return {number:state.number+1};
        case actionTypes.DECREASE1:
            return {number:state.number-1};
        default:
            return state;
    }
}