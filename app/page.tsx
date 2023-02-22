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
			<div className='grid grid-cols-3 gap-3'>
				<div className='col-span-3 bg-red-400'>11</div>
				{GEN.map(eachGen => (
					<NextLink key={eachGen.number} href={`/gen/${eachGen.number}`}>
						<div className='col-span-1 bg-gray-500'>
							Gen {eachGen.number}
							<div className='inline-flex w-full place-content-center'>
								<img className='h-40' src={`/${eachGen.male}.png`} />
								<img className='h-40' src={`/${eachGen.female}.png`} />
							</div>
						</div>
					</NextLink>
				))}
			</div>
		</div>
	)
}
