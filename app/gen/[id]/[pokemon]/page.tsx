interface PokemonProps {
	params: {
		pokemon: string
	}
}

export default async function Page({ params }: PokemonProps) {
	return <h1>{params.pokemon}</h1>
}
