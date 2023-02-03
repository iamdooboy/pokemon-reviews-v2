'use client'

import { MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'

interface SearchModalProps {
	visible: boolean
	close: MouseEventHandler<HTMLDivElement>
	children: React.ReactNode
}

export const BackDrop = ({ visible, close, children }: SearchModalProps) => {
	return (
		<>
			{visible &&
				createPortal(
					<div
						onClick={close}
						className='fixed z-50 bg-black w-full p-4 bg-opacity-25 backdrop-blur-sm flex justify-center overflow-x-hidden inset-0 items-center'
					>
						<div className='flex w-full justify-center items-center'>
							{children}
						</div>
					</div>,
					document.body
				)}
		</>
	)
}
