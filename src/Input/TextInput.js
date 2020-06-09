import React from 'react';

function textInput(props) {
  return (
    <input 
      className="input text-input" 
      type="text" 
      value={props.value} 
      placeholder="New Task"
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default textInput