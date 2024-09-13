import React from 'react'

const TextArea = ({label, type, index, state, setState, property}) => {
  return (
    <>
    <div className="input-wrapper">
        <label className="input-label">
            {label}
        </label>
        <textarea type={type} value={state[index][property]} index={index} property={property} onChange={(e) => {
          const newValue = state.map((item, stateIndex) => stateIndex == index ? {...item, [property]: e.target.value} : item,); setState(newValue)
        }}/>
    </div>
    </>
  )
}

export default TextArea