import { Review } from 'ui/review'
import { Sidebar } from 'ui/sidebar'
import axios from 'axios'

interface PokemonProps {
	params: {
		pokemon: string
	}
}

const getPokemon = async (pokemon: string) => {
	const res = axios
		.get(`https://funny-elk-apron.cyclic.app/api/pokemon/${pokemon}`)
		.then(res => res.data)

	return res
}

export default async function Page({ params }: PokemonProps) {
	const data = await getPokemon(params.pokemon)
	return (
		<>
			<div className='initial sm:sticky top-[64px] self-start col-span-3 p-5'>
				<div className='flex items-stretch justify-between'>
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
			</div>
			<div className='col-span-5 p-5 overflow-auto sm:border-l border-gray-600'>
				<Review />
				<Review />
				<Review />
				<Review />
				<Review />
			</div>
		</>
	)
}
