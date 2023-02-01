'use client'
import React from 'react'
import { pb } from '@/lib/pocketbase'

export const Test = () => {
	const [user, setUser] = React.useState({ name: '', password: '' })
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault()
		setUser({ name: '', password: '' })
		try {
			await pb.collection('users').authWithPassword(user.name, user.password)
		} catch (error) {
			console.log(error)
		}
	}

	const logout = () => {
		pb.authStore.clear()
	}

	if (pb.authStore.model)
		return (
			<>
				<div>Logged In</div>
				<div>token: {pb.authStore.token}</div>
				<div>user: {pb.authStore.model?.id}</div>
				<button onClick={logout}>logout</button>
			</>
		)
	return (
		<form onSubmit={submitHandler} className='flex flex-col gap-2'>
			<input
				type='text'
				value={user.name}
				onChange={e =>
					setUser(prev => ({
						...prev,
						name: e.target.value
					}))
				}
			/>
			<input
				value={user.password}
				type='password'
				onChange={e =>
					setUser(prev => ({
						...prev,
						password: e.target.value
					}))
				}
			/>
			<button type='submit'>login</button>
		</form>
	)
}
