'use client'
import React, { useEffect, useState } from 'react'
import { Pokemon } from 'types/typings'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Flat } from 'types/typings'

interface PokemonArray {
	pokemon: Pokemon[]
	reviews: Flat
}

const VISIBLE = 24

export const TestLayout = ({ pokemon, reviews }: PokemonArray) => {
	const [items, SetItems] = useState<[] | Pokemon[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const indexOfLastRecord = currentPage * VISIBLE
	const indexOfFirstRecord = indexOfLastRecord - VISIBLE
	const max = Math.ceil(pokemon.length / 24)

	useEffect(() => {
		SetItems(pokemon)
	}, [])

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
		<div className='grid grid-cols-3 md:grid-cols-6 gap-4 text-white '>
			<div className='col-span-full flex justify-between bg-slate-600 py-3 text-gray-200 text-2xl w-full text-center rounded-full font-bold shadow-lgdow'>
				<button>
					<ChevronLeft size={32} onClick={goBack} />
				</button>
				Box {currentPage}
				<button>
					<ChevronRight size={32} onClick={goForward} />
				</button>
			</div>
			{items.slice(indexOfFirstRecord, indexOfLastRecord).map(item => (
				<Link
					href={`/gen/${item.gen}/${item.name}`}
					prefetch={false}
					key={item.id}
				>
					<div className='col-span-1 hover:scale-105 hover:rounded-lg transition ease-in-out hover:bg-slate-700'>
						<div className='flex flex-col items-center justify-center aspect-square border rounded-lg border-slate-500'>
							<div>{item.formatted_name}</div>
							<img className='aspect-square w-16' src={item.sprite} />
							<div className='flex justify-evenly items-center gap-2'>
								<Star color='#F59E0B' size={18} fill='#F59E0B' />
								<h1 className='font-bold'>
									{reviews[item.name]
										? reviews[item.name].rating.toFixed(1)
										: Number(0).toFixed(1)}
								</h1>
							</div>
							<div className='text-xs text-gray-400'>
								{reviews[item.name] ? reviews[item.name].count : 0} reviews
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}
