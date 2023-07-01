import React from 'react'
import './styles.css'
import './global.css'
import Router from './Router';
const App = () => {

  return (
    <>
      <div className="grid-layout">
        <div className="principal">
          <Router />

        </div>
      </div>
    </>
  )
}

export default App;