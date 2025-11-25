import { useReducer, useState } from 'react'
import './App.css'
import Board from './components/board/board'
import AppContext from './contexts/context'
import { reducer } from './reducer/reducer'
import { initGameState } from './constants'

function App() {

  const [appState,dispatch] = useReducer(reducer,initGameState)

  const provideState = {
    appState,
    dispatch
  }

  return (
    <AppContext.Provider value={provideState}>
      <Board />
    </AppContext.Provider>
  )
}

export default App
