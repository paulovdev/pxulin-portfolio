import React from 'react'
import './styles.css'
import './global.css'
import Router from './Router';
import { Cursor } from 'custom-pointer-react'
const App = () => {
  return (
    <>
      <div className="grid-layout">
        <div className="principal">
          <Cursor
            showRing={true}
            color="var(--text-color)"
            ringSize={50}
            cursorSize={10}
            ringBorder={2}
          />
          <Router />

        </div>
      </div>
    </>
  )
}

export default App;