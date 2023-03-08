import { Pokemon } from 'types/typings'
import { BlurredImage } from '../blurred-image'
import { Star } from 'lucide-react'

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
	const rounded = Math.round(rating)
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
							<div className='absolute text-5xl lg:text-5xl md:text-3xl font-bold opacity-30 text-white z-30'>
								{data?.jpn}
							</div>
							<div className='p-3'>
								<BlurredImage src={data?.image} alt={data?.name} />
							</div>
						</div>
						<div className='flex flex-col gap-1 mt-3'>
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
									<div className='flex items-center gap-2'>
										{[...Array(rounded)].map((_, i) => (
											<Star key={i} fill='#FACC15' color='#FACC15' />
										))}
										{[...Array(5 - rounded)].map((_, i) => (
											<Star className='text-gray-400 fill-gray-400' key={i} />
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
	)
}
