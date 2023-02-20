export interface Pokemon {
	id: string
	name: string
	types?: [string, string?]
	mega?: Variations[]
	variant?: Variations[]
	forms?: Variations[]
	image: string
	default?: string
	jpn?: string
	gen: number
	prev: Nav
	next: Nav
	formatted_name: string
	sprite: string
}

export interface Gen {
	id: string
	name: string
	image: string
	link: string
}

export interface Nav {
	name: string
	id: string
	gen: number
}

export interface Variations {
	name: string
	types: Types
	image: string
}

export interface Records {
	id: string
	text: string
	expand: {
		pokedex: {
			pokemon: string
		}
		user: {
			name: string
			username: string
		}
	}
	rating: number
	pokedex: {
		pokemon: string
	}
	created: string
	gen: number
	user: string
	likes: string[]
	dislikes: string[]
}

export interface User {
	id: string | undefined
	username: string | undefined
	name: string | undefined
}

export interface Flat {
	[key: string]: {
		rating: number
		count: number
	}
}
