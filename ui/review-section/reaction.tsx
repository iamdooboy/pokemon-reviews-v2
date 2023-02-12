'use client'

import { clsx } from 'clsx'
import { useState, useEffect } from 'react'
import { Records } from 'types/typings'
import { pb } from '@/lib/pocketbase'

interface ReactionProps {
	record: Records
	children: React.ReactNode
}

export const Reaction = ({ record, children }: ReactionProps) => {
	const { likes, dislikes } = record
	const liked = likes.some(id => id === pb.authStore.model?.id)
	const disliked = dislikes.some(id => id === pb.authStore.model?.id)

	const [reaction, setReaction] = useState({
		likes: 0,
		dislikes: 0,
		active: 'neither'
	})
	useEffect(() => {
		let isActive = 'neither'
		if (liked) {
			isActive = 'like'
		} else if (disliked) {
			isActive = 'dislike'
		}
		setReaction({
			likes: likes.length,
			dislikes: dislikes.length,
			active: isActive
		})
	}, [])

	let userId: string = pb.authStore.model?.id || ''
	let tempLikes = [...record.likes]
	let tempDislikes = [...record.dislikes]
	const onLike = async () => {
		if (reaction.active === 'like') {
			setReaction(prev => ({
				...prev,
				likes: prev.likes - 1,
				active: 'neither'
			}))
			tempLikes.splice(tempLikes.indexOf(userId), 1)
		} else if (reaction.active === 'neither') {
			setReaction(prev => ({
				...prev,
				likes: prev.likes + 1,
				active: 'like'
			}))
			tempLikes.push(userId)
		} else {
			setReaction(prev => ({
				dislikes: prev.dislikes - 1,
				likes: prev.likes + 1,
				active: 'like'
			}))
			tempLikes.push(userId)
			tempDislikes.splice(tempDislikes.indexOf(userId), 1)
		}

		const data = {
			...record,
			likes: tempLikes,
			dislikes: tempDislikes
		}

		const updatedRecord = await pb.collection('reviews').update(record.id, data)
		console.log(updatedRecord)
	}

	const onDislike = async () => {
		if (reaction.active === 'dislike') {
			setReaction(prev => ({
				...prev,
				dislikes: prev.dislikes - 1,
				active: 'neither'
			}))
			tempDislikes.splice(tempDislikes.indexOf(userId), 1)
		} else if (reaction.active === 'neither') {
			setReaction(prev => ({
				...prev,
				dislikes: prev.dislikes + 1,
				active: 'dislike'
			}))
			tempDislikes.push(userId)
		} else {
			setReaction(prev => ({
				likes: prev.likes - 1,
				dislikes: prev.dislikes + 1,
				active: 'dislike'
			}))
			tempDislikes.push(userId)
			tempLikes.splice(tempLikes.indexOf(userId), 1)
		}
		const data = {
			...record,
			likes: tempLikes,
			dislikes: tempDislikes
		}

		const updatedRecord = await pb.collection('reviews').update(record.id, data)
		console.log(updatedRecord)
	}

	return (
		<div className='flex gap-4 items-center'>
			<div className='flex items-center text-gray-400 gap-1'>
				<button onClick={onLike} className='rounded-full hover:bg-gray-700 p-1'>
					<svg
						className={clsx(
							'stroke-2 stroke-slate-400',
							reaction.active === 'like' ? 'fill-slate-400' : 'fill-none'
						)}
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
					>
						<path d='M7 10v12'></path>
						<path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z'></path>
					</svg>
				</button>
				{reaction.likes > 0 && reaction.likes}
			</div>

			<div className='flex items-center text-gray-400 gap-1'>
				<button
					onClick={onDislike}
					className='rounded-full hover:bg-gray-700 p-1'
				>
					<svg
						className={clsx(
							'stroke-2 stroke-slate-400',
							reaction.active === 'dislike' ? 'fill-slate-400' : 'fill-none'
						)}
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
					>
						<path d='M17 14V2'></path>
						<path d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z'></path>
					</svg>
				</button>
				{reaction.dislikes > 0 && reaction.dislikes}
			</div>

			{children}
		</div>
	)
}
