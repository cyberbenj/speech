import React from 'react'
import './App.css'

import Form from './components/Form'

const App = () => {
  return (
    <section className='section'>
      <div className='container'>
        <Form
          maxLength={240}
        />
      </div>
    </section>
  )
}

export default App
