import { useState } from 'react'

export default function AddTodo() {
	const [title, setTitle] = useState('')

	const onChange = (e) => {
		setTitle(e.target.value)
	}

	const onClick = async (e) => {
		const url = 'http://localhost:5000/api/'

		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Expose-Headers': 'Access-Control-*',
		}
		if (title.length != 0) {
			const response = await fetch(url, {
				method: 'post',
				mode: 'cors',
				headers: headers,
				body: JSON.stringify({ title: title }),
			})
			setTitle('')
			window.location.reload(false)
		} else {
			alert('Lütfen bir todo başlığı ekleyin!')
		}
	}
	return (
		<div className='add-todo'>
			<input
				onChange={(e) => onChange(e)}
				type='text'
				value={title}
				placeholder='Bir Todo ekleyin'
			/>
			<button onClick={() => onClick()}>Ekle</button>
		</div>
	)
}
