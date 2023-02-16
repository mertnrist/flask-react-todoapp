import { useState } from 'react'

export default function AddTodo({ apiHost, apiUrl }) {
	const [title, setTitle] = useState('')

	const onChange = (e) => {
		setTitle(e.target.value)
	}

	const onClick = async (e) => {
		const headers = {
			'Content-Type': 'application/json',
		}
		if (title.length != 0) {
			const response = await fetch(apiUrl, {
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
