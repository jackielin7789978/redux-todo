import './todo.css'
import { Radio, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { todoToggled, todoDeleted } from './todosSlice'

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()

  const handleToggle = (e) => {
    dispatch(todoToggled({ id: todo.id, isDone: e.target.checked }))
  }

  const handleDelete = () => {
    dispatch(todoDeleted({ id: todo.id }))
  }

  return (
    <div className='todo-container'>
      <Checkbox onChange={handleToggle} checked={todo.isDone} />
      <div className={todo.isDone ? 'taskname-done' : 'taskname'}>
        {todo.taskname}
      </div>
      <Radio.Group>
        <Radio.Button disabled={todo.isDone}>Edit</Radio.Button>
        <Radio.Button disabled={todo.isDone} onClick={handleDelete}>
          Delete
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}
