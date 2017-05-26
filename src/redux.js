let bindActionCreators = (actions,dispatch)=>{
    let dispatchActions = {};
    for(var attr in actions){
      dispatchActions[attr] = ()=> dispatch(actions[attr]());
    }
    return dispatchActions;
}
let createStore = (reducer)=>{
   let state;
   let getState = ()=>state;
   let listeners = [];
   let subscribe = (listener)=>{
       listeners.push(listener);
       return ()=>{
           listeners = listeners.filter(l=>l!=listeners);
       }
   }
   let dispatch = (action)=>{
       state = reducer(state,action);
       listeners.forEach(l=>l())
   }
    dispatch();
   return {
       getState,
       subscribe,
       dispatch
   }
}
export {bindActionCreators,createStore}