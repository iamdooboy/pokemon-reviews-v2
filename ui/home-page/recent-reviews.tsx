import React from 'react'
import { Box } from './box'
import { Header } from './header'

export const RecentReviews = () => {
	return (
		<Box colSpan={6} px={10} py={4}>
			<Header>Recent Reviews</Header>
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
		</Box>
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
