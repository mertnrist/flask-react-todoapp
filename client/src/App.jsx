import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import './style.css'

export default function App() {
	const apiUrl = 'http://localhost:3000'
	const apiHost = 'http://localhost:5000'

	return (
		<div className='container'>
			<AddTodo apiUrl={apiUrl} apiHost={apiHost} />
			<ListTodo apiUrl={apiUrl} apiHost={apiHost} />
		</div>
	)
}
