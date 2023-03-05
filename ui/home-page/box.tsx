import clsx from 'clsx'
import React from 'react'

interface Props {
	className: string
	children: React.ReactNode
}

export const Box = ({ className, children }: Props) => {
	return (
		<div
			className={clsx(
				'border border-gray-600 rounded-lg px-5 py-5 space-y-5 h-full',
				className
			)}
		>
			{children}
		</div>
	)
}
