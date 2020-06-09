import React from 'react';
import Button from '../../Button/Button';

function todo({task, isComplete, onClick, onDelete}) {
  const taskClasses = ['task']
  if (isComplete) {
    taskClasses.push('complete')
  }
  return (
    <div className="todo">
      <input 
        type="checkbox" 
        onClick={(e) => onClick(task, e.target.checked)}  
      />
      <span className={taskClasses.join(' ')}>{task}</span>
      <Button onClick={() => onDelete(task)}>x</Button>
    </div>
  )
}

export default todo