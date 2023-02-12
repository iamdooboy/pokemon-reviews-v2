'use client'

import useSWR from 'swr'
import { pb } from '@/lib/pocketbase'
import { Records } from 'types/typings'
import { Review } from './review'
import { Reaction } from './reaction'

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
				{data?.items.map(record => {
					const auth = record.user === pb.authStore.model?.id
					return (
						<Review key={record.id} data={record}>
							<Reaction record={record}>{auth && <Ellipsis />}</Reaction>
						</Review>
					)
				})}
			</div>
		</>
	)
}

const Ellipsis = () => {
	return (
		<svg
			className='black fill-none stroke-2 stroke-slate-400'
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			viewBox='0 0 24 24'
		>
			<circle cx='12' cy='12' r='1'></circle>
			<circle cx='19' cy='12' r='1'></circle>
			<circle cx='5' cy='12' r='1'></circle>
		</svg>
	)
}
