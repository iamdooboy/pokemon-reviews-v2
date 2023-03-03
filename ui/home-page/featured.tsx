import { Box } from '@/ui/home-page/box'
import { Header } from '@/ui/home-page/header'
import Link from 'next/link'

export const Featured = () => {
	return (
		<Box colSpan={2}>
			<Link href='/gen/3/spheal'>
				<Header>Featured Pokemon</Header>
				<img
					className='w-56 mx-auto'
					src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0363.png'
				/>
				<div className='flex justify-between text-gray-300 px-2 grow'>
					<div className='text-lg'>Spheal</div>
					<div className='text-lg'>#0363</div>
				</div>
			</Link>
		</Box>
	)
}
