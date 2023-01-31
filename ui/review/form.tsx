'use client'
import { ChangeEvent, useState } from 'react'
import { Rating } from '../rating'
import { pb } from '@/lib/pocketbase'

interface Props {
	pokemon: string
	gen?: number
}

export const Form = ({ pokemon, gen }: Props) => {
	const [rating, setRating] = useState(0)
	const [text, setText] = useState('')

	const onClickHandler = (value: number): void => {
		setRating(value)
	}

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault()
		const data = {
			text,
			rating,
			gen,
			user: 'sdafasd',
			pokedex: 'asdfasf'
		}
		try {
			await pb.collection('reviews').create(data)
		} catch (error) {
			console.log(error)
		}
	}

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
							type='text'
							className='rounded-lg flex-1 border border-slate-500 w-full py-2 px-4 bg-gray-700 text-slate-400 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent'
							placeholder='Name'
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
