'use client'
import * as React from 'react'
import { Pokemon, User } from 'types/typings'
import { pb, currentUser } from '@/lib/pocketbase'

interface ContextProps {
	pokemon: Pokemon[]
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>
	user: User
}

interface GlobalContextProps {
	children: React.ReactNode
}

const GlobalContext = React.createContext<ContextProps>({
	pokemon: [],
	setPokemon: (): Pokemon[] => [],
	user: { id: '', username: '', name: '' }
})

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
	const [pokemon, setPokemon] = React.useState<[] | Pokemon[]>([])
	const [user, setUser] = React.useState({
		id: currentUser?.id,
		username: currentUser?.username,
		name: currentUser?.name
	})

	pb.authStore.onChange(() => {
		setUser({
			id: pb.authStore.model?.id,
			username: pb.authStore.model?.username,
			name: pb.authStore.model?.name
		})
	})

	return (
		<GlobalContext.Provider value={{ pokemon, setPokemon, user }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => React.useContext(GlobalContext)
