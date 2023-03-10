import { Featured } from '@/ui/home-page/featured'
import { Generation } from '@/ui/home-page/generation'
import { Discover } from '@/ui/home-page/discover'
import { RecentReviews } from '@/ui/home-page/recent-reviews'
import { TagLine } from '@/ui/home-page/tag-line'
import { pb } from '@/lib/pocketbase'
import { Review } from 'types/typings'

async function getRecentReviews() {
	const reviewList = await pb.collection('reviews').getList<Review>(1, 3, {
		sort: '-created',
		expand: 'pokedex, user'
	})

	const reviews = reviewList.items.map(res => {
		const { expand, created, dislikes, likes, rating, text, gen } = res
		return {
			user: expand.user.name,
			created: created,
			dislikes: dislikes.length,
			pokemon: expand.pokedex.pokemon,
			pokedex: expand.pokedex.ndex,
			likes: likes.length,
			rating,
			text,
			gen
		}
	})
	return reviews
}

export default async function Page() {
	const reviews = await getRecentReviews()
	return (
		<div className='mx-auto max-w-6xl place-items-center py-32'>
			<div className='grid grid-cols-6 gap-8 px-4 md:px-0'>
				<TagLine />
				<Featured />
				<Generation />
				<Discover />
				<RecentReviews reviews={reviews} />
			</div>
		</div>
	)
}
