import './App.less'
import store from './app/store'
import { Provider } from 'react-redux'
import Todo from './features/Todo'

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}
