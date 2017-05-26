import React,{Component} from 'react';
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
export default  class App extends Component{
    render(){
        return (
            <div>
              <Counter1/>
               <Counter2/>
            </div>
        )
    }
}
