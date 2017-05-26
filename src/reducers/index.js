import {combineReducers} from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
export default combineReducers({
    counter1,
    counter2
})
/*
{
    count1:{number:0},
    count2:{number:0}
}*/
