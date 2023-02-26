import clsx from 'clsx'
import React from 'react'

export const Box = ({
	colSpan,
	px,
	py,
	children
}: {
	colSpan: number
	px: number
	py: number
	children: React.ReactNode
}) => {
	return (
		<div
			className={clsx(
				`col-span-${colSpan} border border-gray-600 rounded-lg px-${px} py-${py}`
			)}
		>
			{children}
		</div>
	)
}
