import courses from './courseReducer'
import { combineReducers } from 'redux'
import authors from './authorReducer'

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
