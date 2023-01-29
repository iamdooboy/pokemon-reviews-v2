'use client'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { clsx } from 'clsx'

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

interface PokemonArray {
	pokemon: Pokemon[]
}

interface Pokemon {
	id: string
	name: string
	types: [string, string]
	image: string
	default: string
}

export const TestGrid = ({ pokemon }: PokemonArray) => {
	const pathname = usePathname()
	const [isLoading, setLoading] = React.useState(true)
	const gen = pathname?.charAt(pathname.length - 1)
	return (
		<div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6'>
				{pokemon.slice(0, 12).map(props => (
					<a href={`/gen/${gen}/${props.name}`}>
						<div className='mx-auto'>
							<div className='border-[1px] border-gray-500 hover:bg-gray-700 hover:border-gray-300 transition duration-500 hover:scale-110'>
								<div className='flex flex-col gap-4 items-center justify-center p-10'>
									<h3 className='mt-1 text-gray-300'>{props.name}</h3>
									<Image
										className={clsx(
											'duration-700 ease-in-out group-hover:opacity-75',
											isLoading
												? 'scale-110 blur-2xl grayscale'
												: 'scale-100 blur-0 grayscale-0'
										)}
										alt=''
										src={props.image}
										width={75}
										height={75}
										onLoadingComplete={() => setLoading(false)}
									/>
									<Rating />
									{/* <h3 className='mt-1 text-gray-300'>&#35;{props.id}</h3> */}
								</div>
								{/* <div className='px-16 pb-16'>
									<Image
										className={clsx(
											'duration-700 ease-in-out group-hover:opacity-75',
											isLoading
												? 'scale-110 blur-2xl grayscale'
												: 'scale-100 blur-0 grayscale-0'
										)}
										alt=''
										src={props.image}
										width={75}
										height={75}
										onLoadingComplete={() => setLoading(false)}
									/>
								</div> */}
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}
