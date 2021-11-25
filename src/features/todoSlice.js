import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      taskname: '',
      isDone: false
    }
  ],
  reducers: {
    addTodo: () => {
      console.log('addTodo')
    },
    deleteTodo: () => {
      console.log('deleteTodo')
    },
    toggleTodo: () => {
      console.log('toggle')
    }
  }
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer
