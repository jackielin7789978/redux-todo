import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        state.unshift(action.payload)
      },
      prepare: (id, taskname) => {
        return {
          payload: {
            id,
            taskname,
            isDone: false,
            isBeingEdited: false
          }
        }
      }
    },
    todoDeleted: (state, action) => {
      console.log('deleteTodo')
    },
    todoToggled: (state, action) => {
      console.log('toggle')
    }
  }
})

export const { todoAdded, todoDeleted, todoToggled } = todosSlice.actions

export default todosSlice.reducer
