import React,{useEffect} from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './Routes'
import setAuthToken from './redux/utils/setAuthToken'
import {loadUser} from './redux/actions/auth'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App =() =>{
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])

  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;