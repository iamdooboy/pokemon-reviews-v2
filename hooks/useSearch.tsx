'use client'
import { useState } from 'react'
import { useGlobalContext } from 'context/store'
import { Pokemon } from 'types/typings'

const isNumber = (input: string) => {
	if (input === '') {
		return false
	}
	let regex = new RegExp(/[^0-9]/, 'g')
	return input.match(regex) === null
}

export const useSearch = () => {
	const { pokemon } = useGlobalContext()
	const [filteredList, setFilteredList] = useState<[] | Pokemon[]>([])
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input: string = e.target.value
		setActiveIndex(0)

		if (input.length === 0) {
			setFilteredList([])
			return
		}

		if (isNumber(input)) {
			if (parseInt(input) <= 0) return
			if (parseInt(input) > 1008) return
			setFilteredList([pokemon[parseInt(input) - 1]])
		} else {
			const searchItem = input.toLowerCase() //auto capitalize on mobile
			const copy = [...pokemon]
			const results = copy
				.sort()
				.filter(pkmn => pkmn.name.startsWith(searchItem))
			results.splice(5, copy.length)
			setFilteredList(results)
		}
	}

	return {
		onChange,
		filteredList,
		activeIndex,
		setFilteredList
	}
}
