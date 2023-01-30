'use client'

import { MouseEventHandler } from 'react'

interface SearchModalProps {
	visible: boolean
	close: MouseEventHandler<HTMLDivElement>
	children: React.ReactNode
}

export const SearchModal = ({ visible, close, children }: SearchModalProps) => {
	return (
		<>
			{visible && (
				<div
					onClick={close}
					className='fixed z-50 bg-black w-full p-4 bg-opacity-25 backdrop-blur-sm flex pt-32 justify-center overflow-x-hidden inset-0'
				>
					<div className='w-full max-w-md'>{children}</div>
				</div>
			)}
		</>
	)
}
