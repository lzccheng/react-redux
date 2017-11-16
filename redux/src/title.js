let appState = {
  title:{
    text:'lzccheng',
    color:'red'
  },
  content:{
    text:'chengchengcheng',
    color:'green'
  }
}
function stateChange(state,action){
  switch (action.type){
    case 'update_title_text':
      return {
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }
      break;
    case 'update_title_color':
      return {
        ...state,
        title:{
          ...state.title,
          color:'pink'
        }
      }
      break;
    default :
      break;
  }
}
function createStore(state,stateChange){
  let getState=()=>state;
  const listeners = [];
  const subscribe = (listener)=>listeners.push(listener);
  let dispatch = (action)=>{
    state = stateChange(state,action);
    listeners.map((listener)=>listener());
  };
  return {getState,dispatch,subscribe};
}
function renderApp(appState,oldApp={}){
  if(appState===oldApp)return console.log('false');
  console.log('render app');
  renderTitle(appState.title,oldApp.title);
  renderContent(appState.content,oldApp.content);
}
function renderTitle(title,oldTitle={}){
  if(title === oldTitle)return console.log('false');
  console.log('render title');
  let t = document.getElementById('title');
  t.innerHTML = title.text;
  t.style.color = title.color;
}
function renderContent(content,oldContent={}){
  if(content === oldContent)return console.log('false');
  console.log('render content');
  let c = document.getElementById('content');
  c.innerHTML = content.color;
  c.style.color = content.color;
}
function dispath(action){
  switch(action.type){
    case 'update_title_text':
      appState.title.text = action.text;
      break;
    case 'update_title_color':
      appState.title.color = action.color;
      break;
  }

}

const store = createStore(appState,stateChange);
store.subscribe((oldState)=>renderApp(store.getState(),oldState));
store.dispatch({type:'update_title_text',text:'gitgitgitlzcchengl'});
store.dispatch({type:'update_title_color',color:'yellow'});
renderApp(appState);
