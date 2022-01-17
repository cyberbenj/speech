import React, { useState } from 'react'
import './App.css'

import Textarea from './components/Textarea'
import Button from './components/Button'
import Select from './components/Select'
import Slider from './components/Slider'

const App = () => {
  const synth = window.speechSynthesis
  const Utterance = window.SpeechSynthesisUtterance

  const [message, setMessage] = useState()
  const [voice, setVoice] = useState(0)
  const [pitch, setPitch] = useState(1)
  const [rate, setRate] = useState(1)
  const [icon, setIcon] = useState('play')

  const play = () => {
    if (!synth.speaking) {
      const utterance = new Utterance(message)
      utterance.pitch = pitch
      utterance.rate = rate
      utterance.voice = synth.getVoices()[voice]
      utterance.onend = () => setIcon('play')
      synth.speak(utterance)
      setIcon('stop')
    } else {
      stop()
    }
  }

  const stop = () => {
    synth.cancel()
    setIcon('play')
  }

  const clear = () => {
    setMessage('')
    stop()
  }

  const changeMessage = (value) => setMessage(value)
  const changeVoice = (value) => setVoice(value)
  const changePitch = (value) => setPitch(value)
  const changeRate = (value) => setRate(value)

  return (
    <section className='section'>
      <div className='container'>
        <h1 className='title has-text-centered'>Speech</h1>
        <form>
          <div className='field'>
            <label className='label'>Message</label>
            <Textarea value={message} onChange={changeMessage} />
          </div>
          <div className='field is-grouped'>
            <Button color='is-success' icon={icon} onClick={play} />
            <Button color='is-danger' icon='trash-alt' onClick={clear} />
          </div>
          <hr />
          <div className='field'>
            <Select icon='volume-up' value={voice} options={synth.getVoices()} onChange={changeVoice} />
          </div>
          <div className='field'>
            <label className='label'>Pitch</label>
            <Slider value={pitch} min={0} max={2} step={0.1} onChange={changePitch} />
          </div>
          <div className='field'>
            <label className='label'>Rate</label>
            <Slider value={rate} min={0} max={2} step={0.1} onChange={changeRate} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default App
