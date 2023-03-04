'use client'

import React, { useState } from 'react'
import { Box } from './box'
import { Header } from './header'
import { POKEMON } from 'homepage'
import Link from 'next/link'

const VISIBLE = 4
export const Discover = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const indexOfLastRecord = currentPage * VISIBLE
	const indexOfFirstRecord = indexOfLastRecord - VISIBLE
	const max = Math.ceil(POKEMON.length / 4)
	const goBack = () => {
		if (currentPage === 1) {
			setCurrentPage(max)
			return
		}
		setCurrentPage(prev => prev - 1)
	}

	const goForward = () => {
		if (max === currentPage) {
			setCurrentPage(1)
			return
		}
		setCurrentPage(prev => prev + 1)
	}
	return (
		<Box colSpan={6}>
			<Header>Discover highly rated Pokemon</Header>

			<div className='grid grid-cols-6 gap-16'>
				{POKEMON.map(eachPokemon => (
					<div className='col-span-1'>
						<Link href={`/gen/${eachPokemon.gen}/${eachPokemon.name}`}>
							<img
								className='transation-all duration-500 hover:scale-125'
								src={eachPokemon.image}
							/>
						</Link>
					</div>
				))}
			</div>
		</Box>
	)
}
