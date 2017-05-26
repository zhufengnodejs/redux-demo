import React,{Component} from 'react';
import {connect} from '../react-redux';
import {bindActionCreators} from '../redux';
import actions from '../actions/counter2';
class Counter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.value}</p>
                <button onClick={this.props.increase2}>+</button>
                <button onClick={this.props.decrease2}>-</button>
            </div>
        )
    }
}
//把store中的状态对象映射为Counter组件的属性
let mapStateToProps = (state)=>({
  value:state.counter2.number
})
let mapDispatchToProps = (dispatch)=> (bindActionCreators(actions,dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(Counter)