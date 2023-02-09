'use client'
import { ChangeEvent, useState } from 'react'
import { Rating } from './rating'
import { pb, currentUser } from '@/lib/pocketbase'
import { useGlobalContext } from 'context/store'
import { mutate } from 'swr'
import { useRouter } from 'next/navigation'

interface Props {
	pokemon: string
	gen?: number
	id: string
	close: () => void
}

interface User {
	username: string
	password: string
	passwordConfirm: string
}

const CHAR_SET =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export const Form = ({ pokemon, gen, id, close }: Props) => {
	const router = useRouter()
	const [name, setName] = useState('')
	const [rating, setRating] = useState(0)
	const [text, setText] = useState('')
	const [loading, setLoading] = useState(false)
	const [_, setPassword] = useState('')
	const { user } = useGlobalContext()

	const onClickHandler = (value: number): void => {
		setRating(value)
	}

	const createNewUser = async (newUserData: any) => {
		const res = await pb.collection('users').create(newUserData)
		return res
	}

	const authUser = async (username: string, password: string) => {
		const auth = await pb
			.collection('users')
			.authWithPassword(username, password)
		return auth
	}

	const generatePassword = (): string => {
		var length = 8
		let pw = ''
		for (let i = 0, n = CHAR_SET.length; i < length; ++i) {
			pw += CHAR_SET.charAt(Math.floor(Math.random() * n))
		}
		setPassword(pw)
		return pw
	}

	const submitHandler = async (e: React.FormEvent) => {
		setLoading(true)
		e.preventDefault()
		let userId = currentUser?.id

		if (!currentUser) {
			const pw = generatePassword()
			const newUserData: User = {
				username: name,
				password: pw,
				passwordConfirm: pw
			}
			const data = await createNewUser(newUserData)
			const auth = await authUser(data.username, pw)
			document.cookie = `pb_auth=${data}`
			userId = auth.record.id
		}

		const data = {
			text,
			rating,
			gen,
			user: userId,
			pokedex: id
		}
		try {
			await pb.collection('reviews').create(data)
			mutate(`/${pokemon}`)
		} catch (error) {
			console.log(error)
		}

		setLoading(false)
		close()
		router.refresh()
	}

	if (loading) return <div>loading</div>

	return (
		<form
			className='flex w-full max-w-sm space-x-3'
			onClick={e => e.stopPropagation()}
			onSubmit={submitHandler}
		>
			<div className='w-full max-w-2xl px-5 py-10 m-auto bg-gray-700 rounded-lg shadow'>
				<div className='mb-6 text-3xl font-bold text-left text-white'>
					Review {pokemon}
				</div>
				<div className='grid max-w-xl grid-cols-2 gap-4 m-auto'>
					<div className='col-span-2'>
						<input
							onChange={e => setName(e.target.value)}
							type='text'
							className='rounded-lg flex-1 border border-slate-500 w-full py-2 px-4 bg-gray-700 text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent'
							placeholder='Name'
							value={user.username}
						/>
					</div>
					<div className='col-span-2'>
						<label className='text-gray-700' htmlFor='name'>
							<textarea
								onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
									setText(e.target.value)
								}
								className='flex-1 w-full px-4 py-2 text-base text-slate-400 placeholder-gray-400 bg-gray-700 border border-slate-500 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent'
								placeholder='Enter your comment'
								name='comment'
								rows={5}
								cols={40}
							/>
						</label>
					</div>
					<div className='flex items-stretch justify-between col-span-2'>
						<div className='flex items-center'>
							<Rating
								iconSize='l'
								showOutOf={true}
								enableUserInteraction={true}
								onClick={onClickHandler}
							/>
						</div>
						<div className='col-span-2 text-right'>
							<button
								type='submit'
								className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}
