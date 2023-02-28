import { Featured } from '@/ui/home-page/featured'
import { Generation } from '@/ui/home-page/generation'
import { Discover } from '@/ui/home-page/discover'
import { RecentReviews } from '@/ui/home-page/recent-reviews'
import { TagLine } from '@/ui/home-page/tag-line'
import { pb } from '@/lib/pocketbase'

async function getRecentReviews() {
	const resultList = await pb.collection('reviews').getList(1, 3, {
		sort: '-created',
		expand: 'pokedex, user'
	})
	return resultList.items
}

export default async function Page() {
	const reviews = await getRecentReviews()
	console.log(reviews)
	return (
		<div className='mx-auto max-w-6xl place-items-center py-32'>
			<div className='grid grid-cols-6 gap-8'>
				<TagLine />
				<Featured />
				{/* <div className='col-span-4 border border-gray-600 rounded-lg'>
					hello
				</div> */}
				<Generation />
				<Discover />

				<RecentReviews reviews={reviews} />
			</div>
		</div>
	)
}
