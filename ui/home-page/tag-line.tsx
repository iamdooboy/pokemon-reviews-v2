import React from 'react'
import Balancer from 'react-wrap-balancer'
import { RefreshCw } from 'lucide-react'
import { getRandomInt } from 'utils'
import { pb } from '@/lib/pocketbase'
import Link from 'next/link'
export const fetchCache = 'only-no-store'

const getRandomPokemon = async () => {
	const random = getRandomInt(0, 1009)
	const res = await pb
		.collection('pokedex')
		.getFirstListItem(`ndex="${random}"`)
	return res
}

export const TagLine: any = async () => {
	const res = await getRandomPokemon()
	return (
		<div className='col-span-6 text-center place-items-center place-content-center'>
			<div className='bg-gradient-to-br from-white to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]'>
				<Balancer>Where every Pokemon is critiqued and appreciated!</Balancer>
			</div>
			<div className='className="mt-6 text-center text-gray-500 text-2xl my-4'>
				<Balancer>Share your feedback!</Balancer>
			</div>
			<div className='mx-auto mt-6 flex items-center justify-center'>
				<Link href={`/gen/${res.gen}/${res.pokemon}`}>
					<button className='group bg-gradient-to-r from-indigo-300 to-purple-400 flex max-w-fit rounded-full p-[1px] text-sm text-gray-50 transition-colors'>
						<div className='flex h-full w-full bg-transparent hover:bg-gray-800 px-5 py-2 rounded-full items-center justify-center gap-2'>
							<RefreshCw
								size={16}
								className='group-hover:rotate-180 duration-500 text-gray-900 group-hover:text-white'
							/>
							<div className='text-gray-900 group-hover:text-white'>
								Surprise me
							</div>
						</div>
					</button>
				</Link>
			</div>
		</div>
	)
}
