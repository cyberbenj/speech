import React from 'react'

const Select = ({ icon, value, options, onChange }) => {
  const handleChange = event => onChange(event.target.value)

  return (
    <div className={`control ${icon !== null ? 'has-icons-left' : ''}`}>
      <div className='select'>
        <select value={value} onChange={handleChange}>
          {
            options.map((voice, key) => {
              return <option key={key} value={key}>{voice.name}</option>
            })
          }
        </select>
        {
          icon !== null &&
            <div className='icon is-small is-left'>
              <i className={`fas fa-${icon}`} />
            </div>
        }
      </div>
    </div>
  )
}

export default Select
