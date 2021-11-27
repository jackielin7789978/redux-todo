import './todo.css'
import { Radio, Checkbox } from 'antd'

export default function TodoItem({ taskname }) {
  return (
    <div className='todo-container'>
      <Checkbox />
      <div className='taskname'>{taskname}</div>
      <Radio.Group>
        <Radio.Button>Edit</Radio.Button>
        <Radio.Button>Delete</Radio.Button>
      </Radio.Group>
    </div>
  )
}
