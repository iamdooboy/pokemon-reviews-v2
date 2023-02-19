'use client'

interface ReviewButtonProps {
	openModal?: () => void
}

export const ReviewButton = ({ openModal }: ReviewButtonProps) => {
	return (
		<button
			className='flex justify-center items-center w-full hover:opacity-80'
			onClick={openModal}
			type='button'
		>
			<div className='absolute z-10 text-3xl font-extrabold'>
				Leave a review
			</div>
			<img className='z-0' src='/blank.png' />
		</button>
	)
}
