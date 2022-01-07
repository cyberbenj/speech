import React from 'react'

const Slider = ({ value, min, max, step, onChange }) => {
  const handleChange = event => onChange(event.target.value)

  return (
    <>
      <input
        className='slider has-output'
        type='range'
        value={value} min={min} max={max} step={step}
        onChange={handleChange}
      />
      <output>{value}</output>
    </>
  )
}

export default Slider
