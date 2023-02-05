import { pb } from '@/lib/pocketbase'
import { Pokemon } from 'types/typings'
import { ListReviews } from '@/ui/review-section/list-reviews'
import { ClientWrapper } from '@/ui/client-wrapper'
import { TopSection } from '@/ui/pokemon-page/top-section'
import { Card } from '@/ui/pokemon-page/card'
import { BottomSection } from '@/ui/pokemon-page/bottom-section'

interface PokemonProps {
	params: {
		pokemon: string
	}
}

const getPokemon = async (pokemon: string) => {
	const res = await fetch(
		`https://funny-elk-apron.cyclic.app/api/pokemon/${pokemon}`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}
	)

	const data: Pokemon = await res.json()
	return data
}

const getPokemonFromDb = async (pokemon: string) => {
	const res = await pb.collection('pokedex').getList(1, 1, {
		filter: `pokemon='${pokemon}'`
	})
	return res.items[0]
}

const getRandomInt = (min: number, max: number): string => {
	min = Math.ceil(min)
	max = Math.floor(max)
	const num = Math.floor(Math.random() * (max - min) + min)
	return String(num).padStart(4, '0')
}

const getRandomPokemon = async () => {
	const random = getRandomInt(0, 1009)
	const res = await fetch(
		`https://funny-elk-apron.cyclic.app/api/pokemon/${random}`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		}
	)

	const data: Pokemon = await res.json()
	return data
}

export default async function Page({ params }: PokemonProps) {
	const data = await getPokemon(params.pokemon)
	const review = await getPokemonFromDb(params.pokemon)
	const randomPokemon = await getRandomPokemon()

	return (
		<div className='sm:grid sm:grid-cols-8 h-[calc(100vh-64px)]'>
			<div className='block sm:sticky top-[64px] self-start col-span-3 p-5'>
				<TopSection next={data.next} prev={data.prev} pokemon={randomPokemon} />
				<div className='flex flex-col relative min-w-[1px] max-w-full content-start item-stretch'>
					<Card data={data} rating={review.rating} />
				</div>
				<ClientWrapper>
					<BottomSection pokemon={data.name} gen={data.gen} id={review.id} />
				</ClientWrapper>
			</div>
			<ClientWrapper className='p-5 col-span-5 overflow-auto sm:border-l border-gray-600'>
				<ListReviews pokemon={params.pokemon} />
			</ClientWrapper>
		</div>
	)
}
