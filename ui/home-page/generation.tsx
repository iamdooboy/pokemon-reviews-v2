import { Box } from '@/ui/home-page/box'
import { Header } from '@/ui/home-page/header'
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

export const Generation = () => {
	return (
		<Box colSpan={4}>
			<Header>Explore different generations</Header>
			{/* <div className='place-items-center'> */}
			<div className='grid grid-cols-3 gap-14'>
				{GEN.map(eachGen => (
					<NextLink key={eachGen.number} href={`/gen/${eachGen.number}`}>
						<div className='col-span-1 border border-gray-600 rounded-md text-center text-gray-400 py-2 hover:bg-slate-600 hover:text-white'>
							Gen {eachGen.number}
						</div>
					</NextLink>
				))}
			</div>
			{/* </div> */}
		</Box>
	)
}
