'use client'
import Link from 'next/link'
import { RefreshCw } from 'lucide-react'

export const RandomButton = ({ pokemon }: any) => {
	return (
		<Link
			className='flex items-center justify-center text-white'
			href={`/gen/${pokemon.gen}/${pokemon.name}`}
		>
			<RefreshCw />
		</Link>
	)
}
