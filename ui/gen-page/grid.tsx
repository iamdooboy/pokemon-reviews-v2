'use client'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { GridItem } from './grid-item'
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
		<>
			{items.slice(0, visible).map((item, i) => {
				if (visible === i + 1)
					return (
						<GridItem
							ref={lastPostRef}
							key={item.id}
							name={item.name}
							image={item.image}
							id={item.id}
						/>
					)
				return (
					<GridItem
						key={item.id}
						name={item.name}
						image={item.image}
						id={item.id}
					/>
				)
			})}
		</>
	)
}
