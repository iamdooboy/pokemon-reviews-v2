import Link from 'next/link'
import { Pokemon, Nav } from 'types/typings'

interface Props {
	prev: Nav
	next: Nav
	pokemon: Pokemon
}

export const TopSection = ({ prev, next, pokemon }: Props) => {
	return (
		<div className='flex items-stretch justify-between mb-4'>
			<Link
				href={`/gen/${prev.gen}/${prev.name}`}
				className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
			>
				Prev
			</Link>
			<Link
				href={`/gen/${pokemon.gen}/${pokemon.name}`}
				className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
			>
				Surprise Me
			</Link>
			<Link
				href={`/gen/${next.gen}/${next.name}`}
				className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
			>
				Next
			</Link>
		</div>
	)
}
