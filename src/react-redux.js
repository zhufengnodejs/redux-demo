import React from 'react';
import {PropTypes} from 'prop-types';
//Provider是有来向下传递 store的
class Provider extends React.Component{
    //规定了会向下传递的上下文对象
    getChildContext(){
        return {store:this.props.store}
    }
    render(){
        return this.props.children;
    }
}
Provider.childContextTypes = {
 store:PropTypes.object
}
//从UI组件生成容器组件
let connect = (mapStateToProps,mapDispatchToProps)=>(__component)=>{
  class Proxy extends React.Component{
      constructor(props){
          super(props);
          this.state ={};
      }
      componentWillMount(){
          this.unsubscribe = this.context.store.subscribe(()=>{
              this.setState(mapStateToProps(this.context.store.getState()));
          })
      }
      componentWillUnmount(){
          this.unsubscribe();
      }
      render(){
          return <__component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
      }
  }
    Proxy.contextTypes = {
      store:PropTypes.object
    }
    return Proxy;
}
export {Provider,connect}