'use client'

import { useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

interface ImageProps {
	src: string
	alt: string
}

export const BlurredImage = ({ src, alt }: ImageProps) => {
	const [isLoading, setLoading] = useState(true)

	return (
		<div className='relative aspect-square'>
			<Image
				className={clsx(
					'duration-700 ease-in-out group-hover:scale-150',
					isLoading
						? 'scale-110 blur-2xl grayscale'
						: 'scale-100 blur-0 grayscale-0'
				)}
				alt={alt}
				src={src}
				fill={true}
				onLoadingComplete={() => setLoading(false)}
			/>
		</div>
	)
}
