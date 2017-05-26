import * as actionTypes from '../action-types';
export default {
    increase2:()=>({type: actionTypes.INCREASE2}),
    decrease2:()=>({type: actionTypes.DECREASE2})
}

/*
{
    increase:()=>(()=>dispatch({type: actionTypes.INCREASE})),
    decrease:()=>(()=>dispatch({type: actionTypes.DECREASE}))
}*/
