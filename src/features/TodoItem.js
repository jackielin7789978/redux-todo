import './todo.css'
import { Radio, Checkbox } from 'antd'

export default function TodoItem() {
  return (
    <div className='todo-container'>
      <Checkbox />
      <div className='taskname'>Jogging</div>
      <Radio.Group>
        <Radio.Button>Edit</Radio.Button>
        <Radio.Button>Delete</Radio.Button>
      </Radio.Group>
    </div>
  )
}
