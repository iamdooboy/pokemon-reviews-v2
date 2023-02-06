import React, { HTMLProps } from 'react'
interface RootLayoutProps {
	children: React.ReactNode
}

export const ClientWrapper = ({
	children,
	...props
}: RootLayoutProps & HTMLProps<HTMLDivElement>) => {
	return <div {...props}>{children}</div>
}
