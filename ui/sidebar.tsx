import { Rating } from './rating'
import { Pokemon } from 'types/typings'

interface Props {
	data: Pokemon
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

export const Sidebar = ({ data }: Props) => {
	return (
		<div className='flex flex-col items-stretch justify-start grid-gap'>
			<div
				className={`rounded-lg p-[3px] bg-gradient-to-br ${
					fromDefault[data.types![0]]
				} ${
					data.types![1] ? toDefault[data.types![1]] : toLight[data.types![0]]
				}`}
			>
				<div
					className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4
'
				>
					<div>
						<div className='p-2 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-500'>
							<div className='fixed text-5xl lg:text-5xl md:text-3xl font-bold opacity-25 text-white'>
								{data.jpn}
							</div>
							<img src={data.image} alt={data.name} />
						</div>

						<div className='flex items-center justify-between'>
							<span className='text-4xl sm:text-2xl lg:text-4xl md:text-3xl font-bold text-white'>
								{data.name}
							</span>
							<span className='text-xl sm:text-md font-sans text-gray-400'>
								&#35;{data.id}
							</span>
						</div>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col gap-2'>
								<div className='flex gap-2'>
									{data.types!.map((type: string | undefined) => (
										<img
											key={type}
											className='w-12 sm:w-10 lg:w-12'
											src={`/types/${type}.png`}
											alt={type}
										/>
									))}
								</div>
								<Rating />
							</div>
							<div>
								<span className='text-7xl lg:text-7xl sm:text-5xl font-extrabold text-gray-900 dark:text-white'>
									3.7
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
