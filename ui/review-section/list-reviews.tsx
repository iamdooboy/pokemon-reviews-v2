'use client'

import useSWR, { mutate } from 'swr'
import { pb } from '@/lib/pocketbase'
import { Review as ReviewProps } from 'types/typings'
import { Review } from './review'
import { Reaction } from './reaction'
import { useRouter } from 'next/navigation'
import * as Popover from '@radix-ui/react-popover'

interface ListReviewsProps {
	pokemon: string
}

export const ListReviews = ({ pokemon }: ListReviewsProps) => {
	const fetcher = () =>
		pb.collection('reviews').getList<ReviewProps>(1, 30, {
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
							<Reaction record={record}>
								{auth && <Ellipsis id={record.id} />}
							</Reaction>
						</Review>
					)
				})}
			</div>
		</>
	)
}

const Ellipsis = ({ id }: { id: string }) => {
	const router = useRouter()
	const deleteRecord = async () => {
		await pb.collection('reviews').delete(id)
		mutate('/bulbasaur')
		router.refresh()
	}

	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<button>
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
				</button>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content className='w-24 rounded-md bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white'>
					<div className='hover:bg-gray-500 rounded-t-lg' role='none'>
						<button
							type='button'
							className='flex w-full px-4 py-2 text-left text-sm gap-2'
							role='menuitem'
							id='menu-item-3'
							onClick={() => console.log('edit')}
						>
							<svg
								className='stroke-white stroke-2 fill-none'
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='20'
								viewBox='0 0 24 24'
							>
								<path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'></path>
							</svg>
							Edit
						</button>
					</div>
					<div className='hover:bg-gray-500 rounded-b-lg' role='none'>
						<button
							type='button'
							className='flex w-full px-4 py-2 text-left text-sm gap-2'
							role='menuitem'
							id='menu-item-3'
							onClick={deleteRecord}
						>
							<svg
								className='stroke-white stroke-2 fill-none'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
							>
								<path d='M3 6h18'></path>
								<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
								<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
								<line x1='10' y1='11' x2='10' y2='17'></line>
								<line x1='14' y1='11' x2='14' y2='17'></line>
							</svg>
							Delete
						</button>
					</div>
					<Popover.Arrow className='fill-slate-600' />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}
