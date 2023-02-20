'use client'
import Link from 'next/link'
import { RefreshCw } from 'lucide-react'

export const RandomButton = ({ pokemon }: any) => {
	return (
		<Link
			className='flex items-center justify-center text-white'
			href={`/gen/${pokemon.gen}/${pokemon.name}`}
		>
			<RefreshCw className='hover:rotate-180 duration-500 hover:text-gray-400' />
		</Link>
	)
}
