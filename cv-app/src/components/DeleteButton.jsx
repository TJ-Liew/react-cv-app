import React from 'react'

const DeleteButton = ({index, state, setState}) => {
  function handleDelete(index){
    const newState = [...state];
    newState.splice(index,1)
    setState(newState)
  }
  
  return (
    <button className='delete-btn' onClick={() => {handleDelete(index)}}>Delete</button>
  )
}

export default DeleteButton