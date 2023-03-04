'use client'

import React, { useState } from 'react'
import { Box } from './box'
import { Header } from './header'
import { POKEMON } from 'homepage'
import Link from 'next/link'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../tooltip'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const VISIBLE = 6

export const Discover = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const indexOfLastRecord = currentPage * VISIBLE
	const indexOfFirstRecord = indexOfLastRecord - VISIBLE
	const max = Math.ceil(POKEMON.length / 6)
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
			<TooltipProvider delayDuration={0}>
				<Header>Discover highly rated Pokemon</Header>
				<div className='flex gap-4'>
					<button onClick={goBack}>
						<ChevronLeft className='text-gray-400 hover:text-white' size={40} />
					</button>
					<div className='grid grid-cols-6 gap-16'>
						{POKEMON.slice(indexOfFirstRecord, indexOfLastRecord).map(
							eachPokemon => (
								<div className='col-span-1'>
									<Tooltip>
										<TooltipTrigger asChild>
											<Link
												href={`/gen/${eachPokemon.gen}/${eachPokemon.name}`}
											>
												<img
													className='transation-all duration-300 hover:scale-125'
													src={eachPokemon.image}
												/>
											</Link>
										</TooltipTrigger>
										<TooltipContent side='bottom'>
											<p>{eachPokemon.formatted_name}</p>
										</TooltipContent>
									</Tooltip>
								</div>
							)
						)}
					</div>
					<button onClick={goForward}>
						<ChevronRight
							className='text-gray-400 hover:text-white'
							size={40}
						/>
					</button>
				</div>
			</TooltipProvider>
		</Box>
	)
}
