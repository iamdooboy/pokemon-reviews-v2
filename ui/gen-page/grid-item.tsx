'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, forwardRef } from 'react'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { Pokemon } from 'types/typings'

const Rating = () => (
	<ul className='flex'>
		<li>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='fas'
				data-icon='star'
				className='w-4 text-yellow-500 mr-1'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 576 512'
			>
				<path
					fill='currentColor'
					d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
				></path>
			</svg>
		</li>
		<li>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='fas'
				data-icon='star'
				className='w-4 text-yellow-500 mr-1'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 576 512'
			>
				<path
					fill='currentColor'
					d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
				></path>
			</svg>
		</li>
		<li>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='fas'
				data-icon='star'
				className='w-4 text-yellow-500 mr-1'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 576 512'
			>
				<path
					fill='currentColor'
					d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
				></path>
			</svg>
		</li>
		<li>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='far'
				data-icon='star'
				className='w-4 text-yellow-500 mr-1'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 576 512'
			>
				<path
					fill='currentColor'
					d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
				></path>
			</svg>
		</li>
		<li>
			<svg
				aria-hidden='true'
				focusable='false'
				data-prefix='far'
				data-icon='star'
				className='w-4 text-yellow-500'
				role='img'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 576 512'
			>
				<path
					fill='currentColor'
					d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
				></path>
			</svg>
		</li>
	</ul>
)

export const GridItem = forwardRef((props: Pokemon, ref: any) => {
	const pathname = usePathname()
	const [isLoading, setLoading] = useState(true)
	const gen = pathname?.charAt(pathname.length - 1)
	return (
		<Link href={`/gen/${gen}/${props.name}`}>
			<div
				ref={ref}
				className='flex flex-col items-stretch justify-start rounded-lg '
			>
				<div
					className='group h-full w-full bg-gray-700 rounded-md border border-slate-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4 hover:bg-gray-600 hover:border-gray-100 transition duration-500 
'
				>
					<div
						className='h-full w-full bg-gray-700 group-hover:bg-gray-600 rounded-md p-4 duration-700 ease-in-out
'
					>
						<Image
							className={clsx(
								'duration-700 ease-in-out group-hover:scale-150',
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

					<div className='flex items-center justify-between'>
						<span className='text-white my-2'>{props.name}</span>
						<span className='text-white'>&#35;{props.id}</span>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-2'>
							<div className='flex items-center mb-1'>
								{Array(5)
									.fill(1)
									.map((_, i) => (
										<svg
											key={i}
											aria-hidden='true'
											className='w-6 h-6 text-yellow-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
										</svg>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
})
