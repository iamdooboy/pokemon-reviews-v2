import { pb } from '@/lib/pocketbase'
import { ListReviews } from '@/ui/review-section/list-reviews'
import { ClientWrapper } from '@/ui/client-wrapper'
import { Card } from '@/ui/pokemon-page/card'
import { BottomSection } from '@/ui/pokemon-page/bottom-section'
import { TopSection } from '@/ui/pokemon-page/top-section'
import { RandomButton } from '@/ui/random-button'

interface PokemonProps {
	params: {
		pokemon: string
	}
}

const getRandomInt = (min: number, max: number): string => {
	min = Math.ceil(min)
	max = Math.floor(max)
	const num = Math.floor(Math.random() * (max - min) + min)
	return String(num).padStart(4, '0')
}

const getRandomPokemon = async () => {
	const random = getRandomInt(0, 1009)
	try {
		const res = await fetch(
			`https://funny-elk-apron.cyclic.app/api/pokemon/${random}`
		)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return {
			name: '',
			gen: ''
		}
	}
}

const getPokemon = async (pokemon: string) => {
	try {
		const res = await fetch(
			`https://funny-elk-apron.cyclic.app/api/pokemon/${pokemon}`
		)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return {
			id: '',
			name: '',
			types: ['fire', 'grass'],
			next: {
				name: '',
				gen: ''
			},
			prev: {
				name: '',
				gen: ''
			}
		}
	}
}

const getPokemonFromDb = async (pokemon: string) => {
	const res = await pb.collection('pokedex').getList(1, 1, {
		filter: `pokemon='${pokemon}'`
	})
	return res.items[0]
}

const getReviews = async (pokemon: string) => {
	const records = await pb.collection('reviews').getFullList(50, {
		filter: `pokedex.pokemon='${pokemon}'`
	})

	if (records.length === 0) return 0

	const sum = records.reduce((acc, record) => acc + record.rating, 0)
	return Math.round((sum / records.length) * 10) / 10
}

export default async function Page({ params }: PokemonProps) {
	const data = await getPokemon(params.pokemon)
	const randomPokemon = await getRandomPokemon()
	const review = await getPokemonFromDb(params.pokemon)
	const res = await getReviews(params.pokemon)

	return (
		<div className='sm:grid sm:grid-cols-8 h-[calc(100vh-64px)]'>
			<div className='block sm:sticky top-[64px] self-start col-span-3 p-5'>
				<TopSection next={data?.next} prev={data?.prev}>
					<RandomButton pokemon={randomPokemon} />
				</TopSection>
				<div className='flex flex-col relative min-w-[1px] max-w-full content-start item-stretch'>
					<Card data={data} rating={res} />
				</div>
				<ClientWrapper>
					<BottomSection pokemon={data?.name} gen={data?.gen} id={review?.id} />
				</ClientWrapper>
			</div>
			<ClientWrapper className='p-5 col-span-5 overflow-auto sm:border-l border-gray-600'>
				<ListReviews pokemon={params.pokemon} />
			</ClientWrapper>
		</div>
	)
}
