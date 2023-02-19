'use client'
import { useState } from 'react'
import { ReviewButton } from '../buttons/review-button'
import { BackDrop } from '../backdrop'
import { Form } from '../form'

interface Props {
	pokemon: string
	gen?: number
	id: string
}

export const BottomSection = ({ pokemon, gen, id }: Props) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<div className='flex items-stretch justify-between pt-4'>
				<ReviewButton openModal={() => setShowModal(true)} />
			</div>
			<BackDrop visible={showModal} close={() => setShowModal(false)}>
				<Form
					pokemon={pokemon}
					gen={gen}
					id={id}
					close={() => setShowModal(false)}
				/>
			</BackDrop>
		</>
	)
}
