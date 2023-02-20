import { Pokemon } from 'types/typings'
import { BlurredImage } from '../blurred-image'

interface Props {
	data: Pokemon
	rating: number
}

interface Types {
	[type: string]: string
}

const fromDefault: Types = {
	bug: 'from-bug-default',
	dark: 'from-dark-default',
	dragon: 'from-dragon-default',
	electric: 'from-electric-default',
	fairy: 'from-fairy-default',
	fighting: 'from-fighting-default',
	fire: 'from-fire-default',
	flying: 'from-flying-default',
	ghost: 'from-ghost-default',
	grass: 'from-grass-default',
	ground: 'from-ground-default',
	ice: 'from-ice-default',
	normal: 'from-normal-default',
	poison: 'from-poison-default',
	psychic: 'from-psychic-default',
	rock: 'from-rock-default',
	steel: 'from-steel-default',
	water: 'from-water-default'
}

const toDefault: Types = {
	bug: 'to-bug-default',
	dark: 'to-dark-default',
	dragon: 'to-dragon-default',
	electric: 'to-electric-default',
	fairy: 'to-fairy-default',
	fighting: 'to-fighting-default',
	fire: 'to-fire-default',
	flying: 'to-flying-default',
	ghost: 'to-ghost-default',
	grass: 'to-grass-default',
	ground: 'to-ground-default',
	ice: 'to-ice-default',
	normal: 'to-normal-default',
	poison: 'to-poison-default',
	psychic: 'to-psychic-default',
	rock: 'to-rock-default',
	steel: 'to-steel-default',
	water: 'to-water-default'
}

const toLight: Types = {
	bug: 'to-bug-light',
	dark: 'to-dark-light',
	dragon: 'to-dragon-light',
	electric: 'to-electric-light',
	fairy: 'to-fairy-light',
	fighting: 'to-fighting-light',
	fire: 'to-fire-light',
	flying: 'to-flying-light',
	ghost: 'to-ghost-light',
	grass: 'to-grass-light',
	ground: 'to-ground-light',
	ice: 'to-ice-light',
	normal: 'to-normal-light',
	poison: 'to-poison-light',
	psychic: 'to-psychic-light',
	rock: 'to-rock-light',
	steel: 'to-steel-light',
	water: 'to-water-light'
}

export const Card = ({ data, rating }: Props) => {
	return (
		<div className='flex flex-col justify-start'>
			<div
				className={`rounded-lg p-[3px] bg-gradient-to-br ${
					fromDefault[data?.types![0]]
				} ${
					data?.types![1]
						? toDefault[data?.types![1]]
						: toLight[data?.types![0]]
				}`}
			>
				<div className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>
					<div>
						<div className='p-2 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-500'>
							<div className='fixed text-5xl lg:text-5xl md:text-3xl font-bold opacity-30 text-white z-30'>
								{data?.jpn}
							</div>
							<div className='p-3'>
								<BlurredImage src={data?.image} alt={data?.name} />
							</div>
						</div>
						<div className='flex flex-col gap-3 mt-3'>
							<div className='flex items-center justify-between'>
								<span className='text-4xl sm:text-2xl lg:text-3xl md:text-3xl font-bold text-white'>
									{data?.formatted_name}
								</span>
								<span className='text-xl sm:text-md font-sans text-gray-400'>
									&#35;{data?.id}
								</span>
							</div>
							<div className='flex gap-3 justify-center items-center'>
								<div className='w-2/3 flex flex-col gap-3'>
									<div className='flex gap-2'>
										{data?.types!.map((type: string | undefined) => (
											<img
												key={type}
												className='w-12 sm:w-10 lg:w-12'
												src={`/types/${type}.png`}
												alt={type}
											/>
										))}
									</div>
									<div className='flex items-center mb-1'>
										{Array(5)
											.fill(1)
											.map((_, i) => (
												<svg
													key={i}
													aria-hidden='true'
													className='w-7 h-7 text-yellow-400'
													fill='currentColor'
													viewBox='0 0 20 20'
													xmlns='http://www.w3.org/2000/svg'
												>
													<title>First star</title>
													<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
												</svg>
											))}
									</div>
								</div>
								<div className='w-1/3 text-right'>
									<div className='text-7xl lg:text-7xl sm:text-5xl font-extrabold text-white'>
										{rating?.toFixed(1)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		// <div className='flex flex-col items-stretch justify-start grid-gap'>
		// 	<div
		// 		className={`rounded-lg p-[3px] bg-gradient-to-br ${
		// 			fromDefault[data?.types![0]]
		// 		} ${
		// 			data?.types![1]
		// 				? toDefault[data?.types![1]]
		// 				: toLight[data?.types![0]]
		// 		}`}
		// 	>
		// 		<div className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>
		// 			<div>
		// 				<div className='p-2 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-500'>
		// 					<div className='fixed text-5xl lg:text-5xl md:text-3xl font-bold opacity-30 text-white z-30'>
		// 						{data?.jpn}
		// 					</div>
		// 					<div className='p-3'>
		// 						<BlurredImage src={data?.image} alt={data?.name} />
		// 					</div>
		// 				</div>

		// 				<div className='flex flex-col gap-3 mt-3'>
		// 					<div className='flex items-center justify-between'>
		// 						<span className='text-4xl sm:text-2xl lg:text-4xl md:text-3xl font-bold text-white'>
		// 							{data?.formatted_name}
		// 						</span>
		// 						<span className='text-xl sm:text-md font-sans text-gray-400'>
		// 							&#35;{data?.id}
		// 						</span>
		// 					</div>

		// 					<div className='flex items-center justify-between '>
		// 						<div className='flex flex-col gap-3'>
		// 							<div className='flex gap-2'>
		// 								{data?.types!.map((type: string | undefined) => (
		// 									<img
		// 										key={type}
		// 										className='w-12 sm:w-10 lg:w-12'
		// 										src={`/types/${type}.png`}
		// 										alt={type}
		// 									/>
		// 								))}
		// 							</div>
		// 							<div className='flex items-center mb-1'>
		// 								{Array(5)
		// 									.fill(1)
		// 									.map((_, i) => (
		// 										<svg
		// 											key={i}
		// 											aria-hidden='true'
		// 											className='w-7 h-7 text-yellow-400'
		// 											fill='currentColor'
		// 											viewBox='0 0 20 20'
		// 											xmlns='http://www.w3.org/2000/svg'
		// 										>
		// 											<title>First star</title>
		// 											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
		// 										</svg>
		// 									))}
		// 							</div>
		// 						</div>
		// 						<div>
		// 							<span className='text-7xl lg:text-7xl sm:text-5xl font-extrabold text-gray-900 dark:text-white'>
		// 								{rating?.toFixed(1)}
		// 							</span>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}
