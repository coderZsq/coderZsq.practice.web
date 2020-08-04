import React from 'react'
import ReactDOM from 'react-dom'

// import { StoreContext } from './02-react-redux/utils/context'
import { Provider } from 'react-redux'

import store from './02-react-redux/store'
import App from './02-react-redux/App'

// import store from './04-redux-reducer/store'
// import App from './04-redux-reducer/App'

ReactDOM.render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)