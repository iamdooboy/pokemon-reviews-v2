import { Box } from '@/ui/home-page/box'
import { Header } from '@/ui/home-page/header'

export const Featured = () => {
	return (
		<Box colSpan={2}>
			<Header>Featured Pokemon</Header>
			<img
				className='w-56 mx-auto'
				src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0197.png'
			/>
			<div className='text-lg'>Umbreon</div>
		</Box>
	)
}
