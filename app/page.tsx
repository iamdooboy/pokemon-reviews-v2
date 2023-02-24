import NextLink from 'next/link'

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

export default async function Page() {
	return (
		<div className='mx-auto max-w-6xl place-items-center'>
			<div className='grid grid-cols-3 gap-8'>
				<div className='col-span-1 border border-gray-600 rounded-lg'>
					<div className='font-bold text-2xl text-white'>Featured Pokemon</div>
					<img
						className='w-72 mx-auto'
						src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0197.png'
					/>
					<div className='text-lg'>Umbreon</div>
				</div>
				<div className='col-span-2 border border-gray-600 p-10 rounded-lg'>
					<div className='font-bold text-2xl text-white'>
						Explore different generations
					</div>

					<div className='grid grid-cols-3 gap-16'>
						{GEN.map(eachGen => (
							<NextLink key={eachGen.number} href={`/gen/${eachGen.number}`}>
								<div className='col-span-1 border border-gray-600 rounded-md text-center text-gray-400'>
									Gen {eachGen.number}
								</div>
							</NextLink>
						))}
					</div>
				</div>
				<div className='col-span-3 bg-red-400'>
					<div>Discover highly rated Pokemon</div>
				</div>
			</div>
		</div>
	)
}
