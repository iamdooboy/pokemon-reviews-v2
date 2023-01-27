'use client'
import { useState } from 'react'
import { SearchModal } from './search-modal'

export const SearchButton = () => {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<button
				onClick={() => setShowModal(true)}
				type='button'
				className='border border-gray-600 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 w-auto items-center mr-2 text-gray-600 inline-flex gap-2'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<circle cx='11' cy='11' r='8'></circle>
					<line x1='21' y1='21' x2='16.65' y2='16.65'></line>
				</svg>
				Search Pokemon
			</button>
			{showModal && <SearchModal setShowModal={setShowModal} />}
		</>
	)
}
