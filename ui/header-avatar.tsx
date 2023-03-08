'use client'

import { useState, useRef } from 'react'
import { pb } from '@/lib/pocketbase'
import { useClick } from 'hooks/useClick'
import { useRouter } from 'next/navigation'

interface Props {
	isOpen: boolean
	toggle: () => void
	username: string
	close: () => void
	name: string
}

const MenuDropDown = ({ isOpen, toggle, username, close, name }: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const router = useRouter()

	useClick(ref, () => {
		close()
	})

	const signOut = () => {
		pb.authStore.clear()
		close()
		router.refresh()
	}
	return (
		<div className='relative inline-block text-left'>
			<div className='flex items-center cursor-pointer' onClick={toggle}>
				<img
					src={`https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=${username}`}
					className='rounded-full w-10'
					alt='Avatar'
				/>
				<svg
					className='-mr-1 ml-1 h-8 w-8 text-gray-400 hidden md:block'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' />
				</svg>
			</div>
			{isOpen && (
				<div
					ref={ref}
					className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-500 text-white'
					role='menu'
					aria-orientation='vertical'
					aria-labelledby='menu-button'
				>
					<div className='py-1' role='none'>
						<div
							className='text-gray-400 inline-block px-4 py-2 text-sm'
							role='menuitem'
							id='menu-item-0'
						>
							Signed in as
							<div className='font-semibold text-white'>{name}</div>
						</div>
					</div>
					<div className='py-1 hover:bg-gray-500 rounded-b-lg' role='none'>
						<button
							type='button'
							className='block w-full px-4 py-2 text-left text-sm'
							role='menuitem'
							id='menu-item-3'
							onClick={signOut}
						>
							Sign out
						</button>
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
			{user && (
				<MenuDropDown
					isOpen={open}
					toggle={() => setOpen(!open)}
					username={user.username}
					name={user.name}
					close={() => setOpen(false)}
				/>
			)}
		</>
	)
}
