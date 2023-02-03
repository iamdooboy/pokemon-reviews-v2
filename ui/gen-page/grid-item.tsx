'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, forwardRef } from 'react'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { Pokemon } from 'types/typings'

export const GridItem = forwardRef((props: Pokemon, ref: any) => {
	const pathname = usePathname()
	const [isLoading, setLoading] = useState(true)
	const gen = pathname?.charAt(pathname.length - 1)
	return (
		<Link href={`/gen/${gen}/${props.name}`}>
			<div className='mx-auto'>
				<div
					ref={ref}
					className='border-[1px] border-gray-500 rounded-md hover:bg-gray-700 hover:border-gray-300 transition duration-500 hover:scale-110'
				>
					<h3 className='flex justify-end mx-1 text-gray-500'>
						&#35;{props.id}
					</h3>
					<div className='px-8 pb-8'>
						<Image
							className={clsx(
								'duration-700 ease-in-out group-hover:opacity-75',
								isLoading
									? 'scale-110 blur-2xl grayscale'
									: 'scale-100 blur-0 grayscale-0'
							)}
							alt=''
							src={props.image}
							width={150}
							height={150}
							onLoadingComplete={() => setLoading(false)}
						/>
					</div>
				</div>
				<div className='flex justify-between'>
					<h3 className='mt-1 text-gray-300'>{props.name}</h3>
					<h3 className='mt-1 text-amber-400 text-xl font-extrabold'>4.9</h3>
				</div>
			</div>
		</Link>
	)
})
