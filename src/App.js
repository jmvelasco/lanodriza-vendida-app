import React from 'react'
import { Gallery } from './components/Gallery'
import { Equipamiento } from './components/Equipamiento'
import { Header } from './components/Header'
import { getData } from './pages/api'

const App = (props) => {
  const data = getData();
  return (
    <div>
      <Header title={props.title} subtitle={props.subtitle}/>
      <div className='content-wrapper'>
        <Equipamiento />
        <Gallery pictures={data} />
      </div>
    </div>
  )
}

export default App
