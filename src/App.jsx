import React from 'react'
import './styles.css'
import './global.css'
import Background from './components/Background/Background'
import Router from './Router';
const App = () => {

  return (
    <>
      <Background />
      <div className="grid-layout">
        <div className="principal">
          <Router />

        </div>
      </div>
    </>
  )
}

export default App;