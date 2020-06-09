import React from 'react'
import TextInput from '../Input/TextInput'
import Button from '../Button/Button'
import Todo from './Todo/Todo';

class TodoManager extends React.Component {
  state = {
    newTask: '',
    todoItems: [
      {
        task: 'complete task project',
        isComplete: false
      },
      {
        task: 'redo the project using hooks',
        isComplete: false
      },
      {
        task: 'do data structure questions',
        isComplete: false
      },
      {
        task: 'learn a bit of styling',
        isComplete: false
      },
    ]
  }

  addTask() {
    const newTask = this.state.newTask
    if (!newTask) {
      return
    }
    const todoItems = this.state.todoItems.slice()
    todoItems.push({task: newTask, isComplete: false})
    this.setState({
      newTask: '',
      todoItems: todoItems
    })
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({newTask: value})
  }

  handleCheckbox(task, isComplete) {
    const todoItems = this.state.todoItems
    let idx
    todoItems.some((todo, i) => {
      if (todo.task === task) {
        idx = i
        return true
      }
      return false
    })
    todoItems[idx].isComplete = isComplete
    this.setState({
      todoItems: todoItems
    })
  }

  onDelete = (task) => {
    console.log(task)
    const todoItems = this.state.todoItems
    let idx
    todoItems.some((todo, i) => {
      if (todo.task === task) {
        idx = i
        return true
      }
      return false
    })
    todoItems.splice(idx, 1)
    this.setState({
      todoItems: todoItems
    })
  }

  render() {
    const todos = this.state.todoItems
    return (
      <div className="todo-manager">
        <TextInput value={this.state.newTask} onChange={(e) => this.handleChange(e)} />
        <Button onClick={() => this.addTask()}>Add</Button>
        {
          todos.map((todo, i) => 
            <Todo 
              key={todo.task}
              task={this.state.todoItems[i].task}
              isComplete={this.state.todoItems[i].isComplete}
              onClick={(task, isComplete) => this.handleCheckbox(task, isComplete)}
              onDelete={(task) => this.onDelete(task)}
            >
            </Todo>
          )
        }
      </div>
    )
  }
  
}


export default TodoManager