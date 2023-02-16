import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import './style.css'

export default function App() {
	const apiUrl = 'https://flask-react-todoapp.b2neren.repl.co/api/'
	const apiHost = 'https://flask-react-todoapp.vercel.app/'

	return (
		<div className='container'>
			<AddTodo apiUrl={apiUrl} apiHost={apiHost} />
			<ListTodo apiUrl={apiUrl} apiHost={apiHost} />
		</div>
	)
}
