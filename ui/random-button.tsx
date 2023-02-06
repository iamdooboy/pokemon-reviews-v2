'use client'
import { useRouter } from 'next/navigation'

export const RandomButton = ({ pokemon }: any) => {
	const router = useRouter()
	return (
		<button
			onClick={() => router.push(`/gen/${pokemon.gen}/${pokemon.name}`)}
			className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
		>
			Surprise Me
		</button>
	)
}
