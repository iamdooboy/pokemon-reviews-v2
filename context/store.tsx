'use client'
import * as React from 'react'
import { Pokemon } from 'types/typings'

interface ContextProps {
	pokemon: Pokemon[]
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>
}

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
