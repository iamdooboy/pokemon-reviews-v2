import clsx from 'clsx'
import React from 'react'

export const Box = ({
	colSpan,
	children
}: {
	colSpan: number
	children: React.ReactNode
}) => {
	return (
		<div
			className={clsx(
				`col-span-${colSpan} border border-gray-600 rounded-lg px-5 py-5 space-y-5`
			)}
		>
			{children}
		</div>
	)
}
