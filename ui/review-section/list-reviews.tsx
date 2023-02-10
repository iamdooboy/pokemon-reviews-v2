'use client'

import useSWR from 'swr'
import { pb } from '@/lib/pocketbase'
import { Records } from 'types/typings'
import { Review } from './review'

interface ListReviewsProps {
	pokemon: string
}

export const ListReviews = ({ pokemon }: ListReviewsProps) => {
	const fetcher = () =>
		pb.collection('reviews').getList<Records>(1, 30, {
			filter: `pokedex.pokemon='${pokemon}'`,
			expand: 'user',
			$autoCancel: false
		})

	const { data, isLoading } = useSWR(`/${pokemon}`, fetcher, {
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	})

	if (isLoading) return <div>loading</div>

	return (
		<>
			{data?.items.length === 0 && (
				<div className='text-gray-400 bg-gray-700 font-bold border border-gray-600 flex justify-center rounded-lg py-10'>
					There are no reviews
				</div>
			)}
			<div className='flex flex-col gap-4'>
				{data?.items.map(rev => (
					<Review
						key={rev.id}
						username={rev.expand.user.username}
						date={rev.created}
						rating={rev.rating}
						text={rev.text}
						user={rev.user}
					/>
				))}
			</div>
		</>
	)
}
