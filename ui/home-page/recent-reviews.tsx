import { Box } from './box'
import { Header } from './header'
import { RecentReview } from 'types/typings'
import { Star } from 'lucide-react'
import Link from 'next/link'

export const RecentReviews = ({ reviews }: { reviews: RecentReview[] }) => {
	return (
		<Box className='col-span-6'>
			<Header>Recent Reviews</Header>
			<div className='grid grid-cols-6 gap-4'>
				{reviews.map(review => (
					<div className='col-span-2' key={review.pokedex}>
						<Review review={review} />
					</div>
				))}
			</div>
		</Box>
	)
}

const Review = ({ review }: { review: RecentReview }) => (
	<article className='border border-gray-700 rounded-lg p-4 bg-slate-700 hover:border hover:border-gray-400'>
		<Link href={`/gen/${review.gen}/${review.pokemon}`}>
			<div className='flex mb-2 justify-between items-center'>
				<div className='flex space-x-4 items-center'>
					<img
						className='w-10 h-10 rounded-full'
						src={`https://avatars.dicebear.com/api/adventurer-neutral/${review.user}.svg`}
						alt=''
					/>
					<div className='flex flex-col font-medium text-white justify-between'>
						<div>{review.user}</div>
						<div className='text-gray-500 text-sm'>5 minutes ago</div>
					</div>
				</div>
				<img
					className='w-12'
					src={`https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/${review.pokedex}.png`}
				/>
			</div>

			<p className='font-light text-gray-500 dark:text-gray-400'>
				{review.text}
			</p>
			<div className='flex items-center gap-2'>
				{[...Array(review.rating)].map((_, i) => (
					<Star key={i} fill='#FACC15' color='#FACC15' size={20} />
				))}
				{[...Array(5 - review.rating)].map((_, i) => (
					<Star key={i} fill='#6B7280' color='#6B7280' size={20} />
				))}
			</div>
		</Link>
	</article>
)
