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
const MOBILE_VISIBLE = 3

export const Discover = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const indexOfLastRecord = currentPage * VISIBLE
	const indexOfFirstRecord = indexOfLastRecord - VISIBLE
	const indexOfLastRecordMobile = currentPage * MOBILE_VISIBLE
	const indexOfFirstRecordMobile = indexOfLastRecordMobile - MOBILE_VISIBLE
	const max = Math.ceil(POKEMON.length / VISIBLE)
	const maxMobile = Math.ceil(POKEMON.length / MOBILE_VISIBLE)
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
	const goBackOnMobile = () => {
		if (currentPage === 1) {
			setCurrentPage(maxMobile)
			return
		}
		setCurrentPage(prev => prev - 1)
	}

	const goForwardOnMobile = () => {
		if (maxMobile === currentPage) {
			setCurrentPage(1)
			return
		}
		setCurrentPage(prev => prev + 1)
	}
	return (
		<Box className='col-span-6'>
			<TooltipProvider delayDuration={0}>
				<Header>Discover highly rated Pokemon</Header>
				<div className='md:flex hidden'>
					<button onClick={goBack}>
						<ChevronLeft className='text-gray-400 hover:text-white' size={40} />
					</button>
					<div className='grid-cols-6 gap-16 hidden md:grid'>
						{POKEMON.slice(indexOfFirstRecord, indexOfLastRecord).map(
							eachPokemon => (
								<div className='col-span-2 md:col-span-1' key={eachPokemon.id}>
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
				<div className='flex md:hidden'>
					<button onClick={goBackOnMobile}>
						<ChevronLeft className='text-gray-400 hover:text-white' size={40} />
					</button>
					<div className='grid-cols-6 grid'>
						{POKEMON.slice(
							indexOfFirstRecordMobile,
							indexOfLastRecordMobile
						).map(eachPokemon => (
							<div className='col-span-2 p-2' key={eachPokemon.id}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link href={`/gen/${eachPokemon.gen}/${eachPokemon.name}`}>
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
						))}
					</div>
					<button onClick={goForwardOnMobile}>
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
