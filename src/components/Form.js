import React, { useState } from 'react'
import Button from './Button'
import Slider from './Slider'

const Form = ({ maxLength }) => {
  const [message, setMessage] = useState()
  const [length, setLength] = useState(maxLength)
  const [pitch, setPitch] = useState(1)
  const [rate, setRate] = useState(1)

  const synth = window.speechSynthesis
  const Utterance = window.SpeechSynthesisUtterance

  const handleChange = event => {
    const messageValue = event.target.value
    setLength(maxLength - messageValue.length)
    setMessage(messageValue)
  }

  const readMessage = () => {
    if (!synth.speaking) {
      const utterance = new Utterance(message)
      utterance.pitch = pitch
      utterance.rate = rate
      synth.speak(utterance)
    }
  }

  const clearMessage = () => {
    setMessage('')
    setLength(maxLength)
  }

  const changePitch = (value) => setPitch(value)
  const changeRate = (value) => setRate(value)

  // TODO : get default voice and change voice

  return (
    <form>
      <div className='field'>
        <label className='label'>Message</label>
        <div className='control'>
          <textarea
            className='textarea has-fixed-size'
            maxLength={maxLength}
            value={message}
            onChange={handleChange}
          />
        </div>
        <p className='help is-pulled-right'>{length}</p>
      </div>
      <div className='field is-grouped mt-5'>
        <Button
          color='is-success'
          icon='play'
          onClick={readMessage}
        />
        <Button
          color='is-danger'
          icon='trash-alt'
          onClick={clearMessage}
        />
      </div>
      <hr />
      <div className='field'>
        <div className='select'>
          <select>
            {
              synth.getVoices().map((voice, key) => {
                return <option key={key}>{voice.name}</option>
              })
            }
          </select>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Pitch</label>
        <Slider
          defaultValue={pitch}
          min={0}
          max={2}
          step={0.1}
          onChange={changePitch}
        />
      </div>
      <div className='field'>
        <label className='label'>Rate</label>
        <Slider
          defaultValue={rate}
          min={0.1}
          max={10}
          step={0.1}
          onChange={changeRate}
        />
      </div>
    </form>
  )
}

export default Form
