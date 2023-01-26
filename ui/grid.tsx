'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { BlurImage } from './blur-image'

interface PokemonArray {
	pokemon: Pokemon[]
}

interface Pokemon {
	id: string
	name: string
	types: [string, string]
	image: string
	default: string
}

export const Grid = ({ pokemon }: PokemonArray) => {
	const [items, setItems] = useState(pokemon)
	const [visible, setVisible] = useState(24)
	const ref = useRef<IntersectionObserver | null>(null)

	const lastPostRef = useCallback(
		(post: any) => {
			if (ref.current) ref.current.disconnect()

			ref.current = new IntersectionObserver(
				entries => {
					if (entries[0].isIntersecting) {
						setVisible(prev => prev * 2)
					}
				},
				{ threshold: 1 }
			)

			if (post) ref.current.observe(post)
		},
		[visible]
	)
	return (
		<div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8'>
				{items.slice(0, visible).map((item, i) => {
					if (visible === i + 1)
						return (
							<BlurImage
								ref={lastPostRef}
								key={item.id}
								name={item.name}
								image={item.image}
								id={item.id}
							/>
						)
					return (
						<BlurImage
							key={item.id}
							name={item.name}
							image={item.image}
							id={item.id}
						/>
					)
				})}
			</div>
		</div>
	)
}
