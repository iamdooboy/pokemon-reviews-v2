import NextLink from 'next/link'
import { BlurredImage } from '@/ui/blurred-image'
import { Pokemon } from 'types/typings'
import { POKEMON } from 'homepage'

const GEN = [
	{ number: 1, male: 'red', female: 'leaf' },
	{ number: 2, male: 'ethan', female: 'kris' },
	{ number: 3, male: 'brendan', female: 'may' },
	{ number: 4, male: 'lucas', female: 'dawn' },
	{ number: 5, male: 'hilbert', female: 'hilda' },
	{ number: 6, male: 'calem', female: 'serena' },
	{ number: 7, male: 'elio', female: 'selene' },
	{ number: 8, male: 'victor', female: 'gloria' },
	{ number: 9, male: 'florian', female: 'juliana' }
]

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

export default async function Page() {
	return (
		<div className='mx-auto max-w-6xl place-items-center'>
			<div className='grid grid-cols-6 gap-8'>
				<div className='col-span-2 border border-gray-600 rounded-lg'>
					<div className='font-bold text-2xl text-white'>Featured Pokemon</div>
					<img
						className='w-72 mx-auto'
						src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0197.png'
					/>
					<div className='text-lg'>Umbreon</div>
				</div>
				<div className='col-span-4 border border-gray-600 p-10 rounded-lg'>
					<div className='font-bold text-2xl text-white'>
						Explore different generations
					</div>

					<div className='grid grid-cols-3 gap-16'>
						{GEN.map(eachGen => (
							<NextLink key={eachGen.number} href={`/gen/${eachGen.number}`}>
								<div className='col-span-1 border border-gray-600 rounded-md text-center text-gray-400 py-2'>
									Gen {eachGen.number}
								</div>
							</NextLink>
						))}
					</div>
				</div>
				<div className='col-span-6 border border-gray-600 px-10 py-4 rounded-lg'>
					<div className='font-bold text-2xl text-white'>
						Discover highly rated Pokemon
					</div>
					<div className='grid grid-cols-6 gap-16'>
						{POKEMON.map(eachPokemon => (
							<div className='col-span-1'>
								<div className=''>
									<img src={eachPokemon.image} />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='col-span-6 border border-gray-600 px-10 py-4 rounded-lg'>
					<div className='font-bold text-2xl text-white'>Recent Reviews</div>
					<div className='grid grid-cols-6 gap-4'>
						<div className='col-span-2'>
							<Review />
						</div>
						<div className='col-span-2'>
							<Review />
						</div>
						<div className='col-span-2'>
							<Review />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Review = () => (
	<article className='border border-gray-700 rounded-lg p-4 bg-slate-700'>
		<div className='flex mb-2 justify-between items-center'>
			<div className='flex space-x-4 items-center'>
				<img
					className='w-10 h-10 rounded-full'
					src={`https://avatars.dicebear.com/api/adventurer-neutral/joel.svg`}
					alt=''
				/>
				<div className='flex flex-col font-medium text-white justify-between'>
					<div>Joel</div>
					<div className='text-gray-500 text-sm'>5 minutes ago</div>
				</div>
			</div>
			<img
				className='w-12'
				src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0005.png'
			/>
		</div>

		<p className='font-light text-gray-500 dark:text-gray-400'>hello</p>
		<div className='flex items-center gap-2'>
			{Array(5)
				.fill(1)
				.map((_, i) => (
					<svg
						key={i}
						className='fill-yellow-500 stroke-2 stroke-yellow-500'
						xmlns='http://www.w3.org/2000/svg'
						width='17'
						height='17'
						viewBox='0 0 24 24'
					>
						<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
					</svg>
				))}
		</div>
	</article>
)
