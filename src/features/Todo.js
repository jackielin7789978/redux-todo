import './todo.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoAdded } from './todosSlice'
import { Input, Space } from 'antd'
import TodoItem from './TodoItem'

export default function Todo() {
  const [inputVal, setInputVal] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const idToUse = todos.length ? todos[0].id + 1 : 1
  const onSubmitTodo = () => {
    if (!inputVal) return alert('Please enter a taskname')
    dispatch(todoAdded(idToUse, inputVal))
    setInputVal('')
  }

  return (
    <div className='container'>
      <Space direction='vertical' size='large' style={{ width: '100%' }}>
        <div>
          <h2 className='title'>TO DO</h2>
          <Input
            placeholder='Enter a task...'
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onPressEnter={onSubmitTodo}
          />
        </div>
        <Space
          className='todo-table'
          direction='vertical'
          size='middle'
          style={{ width: '100%' }}
        >
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Space>
      </Space>
    </div>
  )
}
