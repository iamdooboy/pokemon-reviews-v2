'use client'

import { useState, useRef } from 'react'
import { pb } from '@/lib/pocketbase'
import { useClick } from 'hooks/useClick'

interface Props {
	isOpen: boolean
	toggle: () => void
	username: string
	close: () => void
}

const MenuDropDown = ({ isOpen, toggle, username, close }: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	useClick(ref, () => {
		close()
	})
	return (
		<div className='relative inline-block text-left'>
			<div className='flex items-center cursor-pointer' onClick={toggle}>
				<img
					src={`https://avatars.dicebear.com/api/identicon/${username}.svg`}
					className='rounded-full w-10 hidden sm:inline'
					alt='Avatar'
				/>
				<svg
					className='-mr-1 ml-1 h-5 w-5 text-gray-400'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fill-rule='evenodd'
						d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
						clip-rule='evenodd'
					/>
				</svg>
			</div>
			{isOpen && (
				<div
					ref={ref}
					className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
					role='menu'
					aria-orientation='vertical'
					aria-labelledby='menu-button'
				>
					<div className='py-1' role='none'>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							id='menu-item-0'
						>
							Account settings
						</a>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							id='menu-item-1'
						>
							Support
						</a>
						<a
							href='#'
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							id='menu-item-2'
						>
							License
						</a>
						<form method='POST' action='#' role='none'>
							<button
								type='submit'
								className='text-gray-700 block w-full px-4 py-2 text-left text-sm'
								role='menuitem'
								id='menu-item-3'
							>
								Sign out
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export const HeaderAvatar = () => {
	const [open, setOpen] = useState(false)
	const user = pb.authStore.model
	return (
		<>
			{user ? (
				<MenuDropDown
					isOpen={open}
					toggle={() => setOpen(!open)}
					username={user.username}
					close={() => setOpen(false)}
				/>
			) : (
				<button>log in</button>
			)}
		</>
	)
}
