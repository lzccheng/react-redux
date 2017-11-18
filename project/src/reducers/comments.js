// action types
const INIT_COMMENT = 'INIT_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';


// action creators
export const initComments = (comments)=>{
  return {type:INIT_COMMENT,comments:comments}
}

export const addComments = (comments)=>{
  return {type:ADD_COMMENT,comments:comments}
}

export const delComments = (comments)=>{
  return {type:DELETE_COMMENT,comments:comments}
}


// reducer
export default (state={comments:[]},action)=>{
  switch (action.type){
    case INIT_COMMENT:
      return {comments:action.comments};
    case ADD_COMMENT:
      return {comments:[...state.comments,action.comment]};
    case DELETE_COMMENT:
      return {
        comments:[
          ...state.comments.slice(0,action.commentIndex),
          ...state.comments.slice(action.comments+1)
        ]
      };
    default:
      return state;
  }
}
