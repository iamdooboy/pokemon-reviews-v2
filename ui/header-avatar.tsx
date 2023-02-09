// 'use client'

import React from 'react'
import { pb } from '@/lib/pocketbase'
import { cookies } from 'next/headers'
import { currentUser } from '@/lib/pocketbase'
import { getUserFromCookie } from '@/lib/getUserFromCookie'

export const HeaderAvatar = () => {
	const cookie = cookies()
	const user = getUserFromCookie(cookie)
	return (
		// <button>log in</button>
		<>
			{user ? (
				<img
					src={`https://avatars.dicebear.com/api/identicon/${user.username}.svg`}
					className='rounded-full w-10 hidden sm:inline'
					alt='Avatar'
				/>
			) : (
				<button>log in</button>
			)}
		</>
	)
}
