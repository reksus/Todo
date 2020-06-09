import React from 'react'

function button(props) {
  return (
    <button 
      className="btn btn-add"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default button