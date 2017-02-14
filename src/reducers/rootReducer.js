import courseReducer from './reducers'

export default function courseReducer (state = [],action) {
  switch(action.type){
    case 'CREATE_COURSE' :
      return courseReducer(state,action);
    default :
      return state;
  }

}
