import React from 'react'

const Input = ({label, type}) => {
  return (
    <>
    <div className="input-wrapper">
        <label className="input-label">
            {label}
        </label>
        <input type={type}/>
    </div>
    </>
  )
}

export default Input