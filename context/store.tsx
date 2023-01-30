'use client'
import * as React from 'react'

interface ContextProps {
	pokemon: Pokemon[]
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>
}

interface Pokemon {
	id: string
	name: string
	types: Types
	mega: Variations[]
	forms: Variations[]
	image: Variations[]
	default: string
	jpn: string
	gen: string
}

interface Variations {
	name: string
	types: Types
	image: string
}

type Types = [string, string]

interface GlobalContextProps {
	children: React.ReactNode
}

const GlobalContext = React.createContext<ContextProps>({
	pokemon: [],
	setPokemon: (): Pokemon[] => []
})

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
	const [pokemon, setPokemon] = React.useState<[] | Pokemon[]>([])
	return (
		<GlobalContext.Provider value={{ pokemon, setPokemon }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => React.useContext(GlobalContext)
