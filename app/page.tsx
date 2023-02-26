import { Featured } from '@/ui/home-page/featured'
import { Generation } from '@/ui/home-page/generation'
import { Discover } from '@/ui/home-page/discover'
import { RecentReviews } from '@/ui/home-page/recent-reviews'
import { TagLine } from '@/ui/home-page/tag-line'

export default async function Page() {
	return (
		<div className='mx-auto max-w-6xl place-items-center py-32'>
			<div className='grid grid-cols-6 gap-8'>
				<TagLine />
				<Featured />
				<Generation />
				<Discover />
				<RecentReviews />
			</div>
		</div>
	)
}
