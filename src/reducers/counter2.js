import * as actionTypes from '../action-types';
export default function reducer(state={number:0},action){
    if(action ==undefined) return state;
    switch (action.type){
        case actionTypes.INCREASE2:
            return {number:state.number+2};
        case actionTypes.DECREASE2:
            return {number:state.number-2};
        default:
            return state;
    }
}