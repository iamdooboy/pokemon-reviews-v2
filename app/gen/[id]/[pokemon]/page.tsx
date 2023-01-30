import { Review } from 'ui/review'
import { Sidebar } from 'ui/sidebar'
import { BottomButtons } from 'ui/review/bottom-buttons'
import { pb } from '@/lib/pocketbase'
import { Pokemon, Records } from 'types/typings'

interface PokemonProps {
	params: {
		pokemon: string
	}
}

const getPokemon = async (pokemon: string) => {
	try {
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
	} catch (error) {
		const data: Pokemon = {
			id: '',
			name: '',
			types: ['fire', 'fire'],
			image: '',
			jpn: ''
		}
		return data
	}
}
const getReviews = async (pokemon: string): Promise<Records[]> => {
	try {
		const records = await pb.collection('reviews').getList<Records>(1, 30, {
			filter: `pokedex.pokemon='${pokemon}'`,
			expand: 'user',
			$autoCancel: false
		})
		return records.items
	} catch (error) {
		console.log(error)
		return []
	}
}

export default async function Page({ params }: PokemonProps) {
	const data = await getPokemon(params.pokemon)
	const reviews = await getReviews(params.pokemon)
	return (
		<div className='sm:grid sm:grid-cols-8 h-[calc(100vh-64px)]'>
			<div className='block sm:sticky top-[64px] self-start col-span-3 p-5'>
				<div className='flex items-stretch justify-between mb-4'>
					<a
						href='#'
						className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
					>
						Prev
					</a>
					<a
						href='#'
						className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
					>
						Surprise Me
					</a>
					<a
						href='#'
						className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
					>
						Next
					</a>
				</div>
				<div className='flex flex-col relative min-w-[1px] max-w-full content-start item-stretch'>
					<Sidebar data={data} />
				</div>
				<BottomButtons pokemon={data.name} />
			</div>
			<div className='p-5 col-span-5 overflow-auto sm:border-l border-gray-600'>
				{reviews.length === 0 && (
					<div className='text-gray-400 bg-gray-700 font-bold border border-gray-600 flex justify-center rounded-lg py-10'>
						There are no reviews
					</div>
				)}
				{reviews.map(review => (
					<Review
						key={review.id}
						username={review.expand.user.username}
						date={review.created}
						rating={review.rating}
						text={review.text}
					/>
				))}
			</div>
		</div>
	)
}
