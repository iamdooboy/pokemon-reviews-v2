import { Review } from 'ui/review'
import { Sidebar } from 'ui/sidebar'

interface PokemonProps {
	params: {
		pokemon: string
	}
}

export default async function Page({ params }: PokemonProps) {
	return (
		<>
			<div className='sticky top-[64px] self-start col-span-3 p-5'>
				<div className=' flex items-stretch justify-between'>
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
					<Sidebar />
				</div>
			</div>
			<div className='col-span-5 p-5 overflow-auto border-l border-gray-500'>
				<Review />
				<Review />
				<Review />
				<Review />
				<Review />
			</div>
		</>
	)
}
