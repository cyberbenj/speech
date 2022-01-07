import React from 'react'

const Button = ({ icon, color, onClick }) => {
  const handleClick = event => {
    event.preventDefault()
    onClick()
  }

  return (
    <div className='control'>
      <button className={`button ${color}`} onClick={handleClick}>
        <span className={`fa fa-${icon}`} />
      </button>
    </div>
  )
}

export default Button
