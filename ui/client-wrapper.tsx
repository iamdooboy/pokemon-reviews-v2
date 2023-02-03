import React from 'react'

export const ClientWrapper = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}
