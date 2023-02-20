//import { Grid } from '@/ui/gen-page/grid'
import { Pokemon, Flat, Records } from 'types/typings'
import { TestLayout } from '@/ui/TestLayout'
import { pb } from '@/lib/pocketbase'

async function getGen(id: string): Promise<Pokemon[]> {
	try {
		const res = await fetch(`https://funny-elk-apron.cyclic.app/api/gen/${id}`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return []
	}
}

async function getReviews(id: string): Promise<Flat> {
	try {
		const records: Records[] = await pb.collection('reviews').getFullList(200, {
			filter: `gen=${id}`,
			sort: 'pokedex.ndex',
			expand: 'pokedex',
			$autoCancel: false
		})

		const flat: Flat = {}

		records.forEach(record => {
			const pokemon = record.expand.pokedex.pokemon
			if (flat[pokemon]) {
				flat[pokemon].rating += record.rating
				flat[pokemon].count++
			} else {
				flat[pokemon] = {
					rating: record.rating,
					count: 1
				}
			}
		})

		for (id in flat) {
			flat[id] = {
				rating: Math.round((flat[id].rating / flat[id].count) * 10) / 10,
				count: flat[id].count
			}
		}

		return flat
	} catch (error) {
		return {}
	}
}

interface GenProps {
	params: {
		id: string
	}
}

export default async function Page({ params }: GenProps) {
	const pokemonFromGen = await getGen(params.id)
	const reviewsFromGen = await getReviews(params.id)

	const [pokemon, reviews] = await Promise.all([pokemonFromGen, reviewsFromGen])

	return (
		<div className='h-full max-h-screen'>
			<div className='mx-auto max-w-6xl p-4 align-center'>
				<TestLayout pokemon={pokemon} reviews={reviews} />
			</div>
		</div>
		// <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
		// 	<div className='grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8'>
		// 		<Grid pokemon={pokemon} />
		// 	</div>
		// </div>
	)
}
