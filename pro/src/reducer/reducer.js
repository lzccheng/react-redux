
export let update_color = (color)=>{
  return {
    type:'update_color',
    color:color
  }
}

export default (state={},action)=>{
  switch (action.type){
    case 'update_color':
      return {
        color:action.color
      };
    default:
      return state;
  }
}
