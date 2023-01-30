'use client'

import { useState } from 'react'
import { SearchModal } from './search-modal'
import { useGlobalContext } from 'context/store'
import { Input } from './input'
import { SearchResults } from './search-results'
import { useSearch } from 'hooks/useSearch'

export const SearchButton = () => {
	const [showModal, setShowModal] = useState(false)
	const { pokemon, setPokemon } = useGlobalContext()
	const { onChange, filteredList, setFilteredList, activeIndex } = useSearch()

	const onClickHandler = async () => {
		setShowModal(true)

		if (pokemon.length === 0) {
			const res = await fetch(
				'https://funny-elk-apron.cyclic.app/api/pokemon'
			).then(async res => await res.json())

			setPokemon(res)
		}
	}

	const closeModal = () => {
		setShowModal(false)
		setFilteredList([])
	}

	return (
		<>
			<button
				onClick={onClickHandler}
				type='button'
				className='border pr-8 border-gray-600 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-auto items-center text-gray-600 inline-flex mr-2 sm:py-2'
			>
				<div className='mx-3'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<circle cx='11' cy='11' r='8'></circle>
						<line x1='21' y1='21' x2='16.65' y2='16.65'></line>
					</svg>
				</div>
				Search Pokemon
			</button>
			<SearchModal visible={showModal} close={closeModal}>
				<Input onChange={onChange}>
					<SearchResults list={filteredList} close={closeModal} />
				</Input>
			</SearchModal>
		</>
	)
}
