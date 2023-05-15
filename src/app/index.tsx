import React, { useEffect } from 'react'
import { screens } from '../sections'
import Header from '../components/Header/Header'
import WithScrollSmoother from './providers/WithScrollSmoother'
import { useFadeIn } from '../hooks/useFadeIn'

const App = () => {
  useEffect(() => useFadeIn('.reveal'), [])

  return (
    <div className="App">
      <WithScrollSmoother>
        <Header />
        {screens.map((screen, idx) => (
          <React.Fragment key={idx}>{screen.element}</React.Fragment>
        ))}
      </WithScrollSmoother>
    </div>
  )
}

export default App
