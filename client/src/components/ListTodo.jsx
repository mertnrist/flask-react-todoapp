import { useEffect, useState } from 'react'

export default function ListTodo({ apiHost, apiUrl }) {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		getTodos()
	}, [])

	const getTodos = async () => {
		let response = await fetch(apiUrl)
		response = await response.json()
		setTodos(response.todos)
	}

	const updateTodo = async (todo) => {
		let body = {}

		if (todo.isDone === false) {
			body = { isDone: true }
		} else {
			body = { isDone: false }
		}

		const id = todo.id
		const url = apiHost + id
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': apiHost,
			'Access-Control-Expose-Headers': 'Access-Control-*',
		}
		const response = await fetch(apiUrl, {
			method: 'put',
			mode: 'cors',
			headers: headers,
			body: JSON.stringify(body),
		})

		const data = []
		todos.forEach((todo) => {
			if (todo.id == id) {
				todo.isDone = body.isDone
			}
			data.push(todo)
		})
		setTodos(data)
	}

	const deleteTodos = async () => {
		const data = []
		todos.forEach(async (todo) => {
			const isDone = todo.isDone
			const headers = {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': apiHost,
				'Access-Control-Expose-Headers': 'Access-Control-*',
			}

			if (isDone == true) {
				const response = await fetch(apiUrl + todo.id, {
					method: 'Delete',
					mode: 'cors',
					headers: headers,
				})
			} else {
				data.push(todo)
			}
		})
		setTodos(data)
	}

	return (
		<div className='list-todo'>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} className={todo.isDone ? 'done' : ''}>
						<input
							onChange={() => updateTodo(todo)}
							type='checkbox'
							checked={todo.isDone}
						/>
						<div className={todo.isDone ? 'done' : ''}>
							{todo.title}
						</div>
					</li>
				))}
			</ul>
			<div className='all-todos'>
				<div>Toplam: {todos.length}</div>
				<button onClick={(e) => deleteTodos()}>Yapılanları Sil</button>
			</div>
		</div>
	)
}
