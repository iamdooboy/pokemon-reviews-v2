interface ReviewProps {
	username: string
	date: string
	rating: number
	text: string
}

export const timeOffset = (time: string) => {
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

export const Review = ({ username, date, rating, text }: ReviewProps) => {
	const diff = timeOffset(date)
	return (
		<article className='border border-gray-700 rounded-lg p-4'>
			<div className='flex mb-2 space-x-4 items-center'>
				<img
					className='w-10 h-10 rounded-full'
					src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
					alt=''
				/>
				<div className='flex flex-col font-medium text-white justify-between'>
					<text>{username}</text>
					<text className='text-gray-500 text-sm'>{diff}</text>
				</div>
			</div>

			<p className='mb-2 font-light text-gray-500 dark:text-gray-400'>{text}</p>
			<div className='flex items-center mb-1'>
				{Array(rating)
					.fill(1)
					.map((_, i) => (
						<svg
							key={i}
							aria-hidden='true'
							className='w-5 h-5 text-yellow-400'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>First star</title>
							<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
						</svg>
					))}
			</div>
		</article>
	)
}
