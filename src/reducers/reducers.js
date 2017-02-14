export function courseReducer (state=[], action){
  return [
    ...state,
    Object.assign({}, action.course)
  ];
}
