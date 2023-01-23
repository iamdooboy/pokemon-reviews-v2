import { Review } from 'ui/review'

interface PokemonProps {
	params: {
		pokemon: string
	}
}

export default async function Page({ params }: PokemonProps) {
	return (
		<h1 className='text-white pl-3'>
			<h1>{params.pokemon}</h1>
			<Review />
			<Review />
			<Review />
			<Review />
			<Review />
		</h1>
	)
}
