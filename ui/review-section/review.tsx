import { pb } from '@/lib/pocketbase'
import { Records } from 'types/typings'

interface ReviewProps {
	data: Records
}

interface Props {
	likes: number
	dislikes: number
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

export const Reaction = ({ likes, dislikes, children }: Props) => {
	return (
		<div className='flex gap-4 items-center'>
			<div className='flex items-center text-gray-400 gap-1'>
				<svg
					className='hover:fill-slate-400 fill-none stroke-2 stroke-slate-400'
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
				>
					<path d='M7 10v12'></path>
					<path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z'></path>
				</svg>
				{likes > 0 && likes}
			</div>

			<div className='flex items-center text-gray-400 gap-1'>
				<svg
					className='hover:fill-slate-400 fill-none stroke-2 stroke-slate-400'
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
				>
					<path d='M17 14V2'></path>
					<path d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z'></path>
				</svg>
				{dislikes > 0 && dislikes}
			</div>

			{children}
		</div>
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

export const Review = ({ data }: ReviewProps) => {
	const auth = data.user === pb.authStore.model?.id
	const diff = timeOffset(data.created)
	return (
		<article className='border border-gray-700 rounded-lg p-4 space-y-3'>
			<div className='flex mb-2 space-x-4 items-center'>
				<img
					className='w-10 h-10 rounded-full'
					src={`https://avatars.dicebear.com/api/adventurer-neutral/${data.expand.user.username}.svg`}
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
					.map(_ => (
						<svg
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
					.map(_ => (
						<svg
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
			<Reaction likes={data.likes.length} dislikes={data.dislikes.length}>
				{auth && <Ellipsis />}
			</Reaction>
		</article>
	)
}
