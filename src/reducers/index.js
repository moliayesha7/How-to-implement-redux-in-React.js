
import { combineReducers } from 'redux';
import counter from './counterReducer';
import head from './headReducer';
 
// to combine all reducers together
const appReducer = combineReducers({
  counter,
  head
});
 
export default appReducer;