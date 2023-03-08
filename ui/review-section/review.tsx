'use client'

import { Review as ReviewType } from 'types/typings'

interface ReviewProps {
	data: ReviewType
	children: React.ReactNode
}

const timeOffset = (time: string) => {
	const createdAt = new Date(time)
	const now = new Date()
	const offset = now.getTime() - createdAt.getTime()
	const minutes = Math.floor(offset / 1000 / 60)

	if (minutes < 1) {
		return 'a moment ago'
	}

	if (minutes === 1) {
		return 'a minute ago'
	}

	if (minutes < 60) {
		return `${minutes} minutes ago`
	}

	const hours = Math.floor(minutes / 60)

	if (hours === 1) {
		return 'an hour ago'
	}

	if (hours < 24) {
		return `${hours} hours ago`
	}

	const days = Math.floor(hours / 24)

	const numOfDaysInMonth = new Date(
		now.getFullYear(),
		now.getMonth(),
		0
	).getDate()

	if (days === 1) {
		return 'a day ago'
	}

	if (days < numOfDaysInMonth) {
		return `${days} days ago`
	}

	const months = days / numOfDaysInMonth

	if (months === 1) {
		return 'a month ago'
	}

	if (months < 12) {
		return `${months} months ago`
	}

	const years = months / 12

	if (years === 1) {
		return 'a year ago'
	}

	return `${years} year ago`
}

export const Review = ({ data, children }: ReviewProps) => {
	const diff = timeOffset(data.created)
	return (
		<article className='border border-gray-700 rounded-lg p-4 space-y-3'>
			<div className='flex mb-2 space-x-4 items-center'>
				<img
					className='w-10 h-10 rounded-full'
					src={`https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=${data.expand.user.username}`}
					alt=''
				/>
				<div className='flex flex-col font-medium text-white justify-between'>
					<div>{data.expand.user.name}</div>
					<div className='text-gray-500 text-sm'>{diff}</div>
				</div>
			</div>

			<p className='font-light text-gray-500 dark:text-gray-400'>{data.text}</p>
			<div className='flex items-center gap-2'>
				{Array(data.rating)
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
				{Array(5 - data.rating)
					.fill(1)
					.map((_, i) => (
						<svg
							key={i}
							className='fill-gray-500 stroke-2 stroke-gray-500'
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='17'
							viewBox='0 0 24 24'
						>
							<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
						</svg>
					))}
			</div>
			{children}
		</article>
	)
}
