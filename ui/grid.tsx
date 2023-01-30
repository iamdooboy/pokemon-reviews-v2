'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { BlurImage } from './blur-image'
import { Pokemon } from 'types/typings'

interface PokemonArray {
	pokemon: Pokemon[]
}

export const Grid = ({ pokemon }: PokemonArray) => {
	const [items, SetItems] = useState<[] | Pokemon[]>([])
	const [visible, setVisible] = useState(24)
	const ref = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		SetItems(pokemon)
	}, [])

	const lastPostRef = useCallback(
		(post: HTMLElement) => {
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
