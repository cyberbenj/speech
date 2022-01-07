import React, { useState } from 'react'

const Slider = ({ defaultValue, min, max, step, onChange }) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = event => {
    setValue(event.target.value)
    onChange(value)
  }

  return (
    <>
      <input
        className='slider has-output'
        type='range'
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
      <output>{value}</output>
    </>
  )
}

export default Slider
