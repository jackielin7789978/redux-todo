import './todo.css'
import { Input, Space } from 'antd'
import TodoItem from './TodoItem'

export default function Todo() {
  return (
    <div className='container'>
      <Space direction='vertical' size='large' style={{ width: '100%' }}>
        <div>
          <h2 className='title'>TO DO</h2>
          <div className='input-bar'>
            <Input placeholder='Enter a task...' />
          </div>
        </div>
        <Space
          className='todo-table'
          direction='vertical'
          size='middle'
          style={{ width: '100%' }}
        >
          <TodoItem />
          <TodoItem />
        </Space>
      </Space>
    </div>
  )
}
