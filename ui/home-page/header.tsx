import React from 'react'

export const Header = ({ children }: { children: React.ReactNode }) => {
	return <div className='font-bold text-2xl text-white'>{children}</div>
}
