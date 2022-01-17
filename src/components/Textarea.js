import React from 'react'

const Textarea = ({ value, onChange }) => {
  const handleChange = event => onChange(event.target.value)

  return (
    <div className='control'>
      <textarea
        className='textarea has-fixed-size-vertical'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Textarea
