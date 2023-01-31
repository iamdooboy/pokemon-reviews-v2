'use client'

import { useState } from 'react'
import { BackDrop } from 'ui/review/backdrop'
import { Form } from 'ui/review/form'

interface Props {
	pokemon: string
	gen?: number
}

export const BottomButtons = ({ pokemon, gen }: Props) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<div className='flex items-stretch justify-between mt-4'>
				<button
					type='button'
					className='text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z'></path>
					</svg>
				</button>
				<button
					onClick={() => setShowModal(true)}
					type='button'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Leave a review
				</button>
			</div>
			<BackDrop visible={showModal} close={() => setShowModal(false)}>
				<Form pokemon={pokemon} gen={gen} />
			</BackDrop>
		</>
	)
}
