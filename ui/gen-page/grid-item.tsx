'use client'

import Link from 'next/link'
import { forwardRef } from 'react'
import { usePathname } from 'next/navigation'
import { Gen } from 'types/typings'
import { BlurredImage } from '../blurred-image'

export const GridItem = forwardRef((props: Gen, ref: any) => {
	const pathname = usePathname()
	const gen = pathname?.charAt(pathname.length - 1)
	return (
		<Link href={`/gen/${gen}/${props.link}`} prefetch={false}>
			<div
				ref={ref}
				className='flex flex-col items-stretch justify-start rounded-lg '
			>
				<div className='group h-full w-full bg-gray-700 rounded-md border border-slate-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4 hover:bg-gray-600 hover:border-gray-100 transition duration-500'>
					<div className='h-full w-full bg-gray-700 group-hover:bg-gray-600 rounded-md p-4 duration-700 ease-in-out'>
						<BlurredImage alt={props.name} src={props.image} />
					</div>

					<div className='flex items-center justify-between'>
						<span className='text-white my-2 font-medium'>{props.name}</span>
						<span className='text-gray-500 text-xs'>&#35;{props.id}</span>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-2'>
							<div className='flex items-center mb-1'>
								{Array(5)
									.fill(1)
									.map((_, i) => (
										<svg
											key={i}
											aria-hidden='true'
											className='w-6 h-6 text-yellow-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
										</svg>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
})
