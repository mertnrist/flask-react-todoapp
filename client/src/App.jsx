import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import './style.css'

export default function App() {
	return (
		<div className='container'>
			<AddTodo />
			<ListTodo />
		</div>
	)
}
