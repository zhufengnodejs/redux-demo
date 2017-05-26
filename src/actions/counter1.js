import * as actionTypes from '../action-types';
export default {
    increase1:()=>({type: actionTypes.INCREASE1}),
    decrease1:()=>({type: actionTypes.DECREASE1})
}

/*
{
    increase:()=>(()=>dispatch({type: actionTypes.INCREASE})),
    decrease:()=>(()=>dispatch({type: actionTypes.DECREASE}))
}*/
