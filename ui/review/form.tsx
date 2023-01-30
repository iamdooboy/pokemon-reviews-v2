'use client'
import { useState } from 'react'

interface Props {
	pokemon: string
}

const FillStar = () => (
	<svg
		aria-hidden='true'
		className='text-yellow-400 w-7 h-7'
		fill='currentColor'
		viewBox='0 0 20 20'
		xmlns='http://www.w3.org/2000/svg'
	>
		<title>Third star</title>
		<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
	</svg>
)

const OutlineStar = () => (
	<svg
		aria-hidden='true'
		className='text-gray-300 w-7 h-7 dark:text-gray-500'
		fill='currentColor'
		viewBox='0 0 20 20'
		xmlns='http://www.w3.org/2000/svg'
	>
		<title>Fifth star</title>
		<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
	</svg>
)

export const Form = ({ pokemon }: Props) => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)

	return (
		<form
			className='flex w-full max-w-sm space-x-3'
			onClick={e => e.stopPropagation()}
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
							{[...Array(rating)].map((_, index) => {
								index += 1
								return (
									<button
										type='button'
										key={index}
										onClick={() => setRating(index)}
										onMouseEnter={() => setHover(index)}
										onMouseLeave={() => setHover(rating)}
									>
										<FillStar />
									</button>
								)
							})}
							{[...Array(5 - rating)].map((_, index) => {
								index += 1
								return (
									<button
										type='button'
										key={index}
										onClick={() => setRating(index)}
										onMouseEnter={() => setHover(index)}
										onMouseLeave={() => setHover(rating)}
									>
										<OutlineStar />
									</button>
								)
							})}
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
