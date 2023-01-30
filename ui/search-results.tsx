import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface ListProps {
	list: Pokemon[]
	close: MouseEventHandler<HTMLAnchorElement>
}

interface Pokemon {
	id: string
	name: string
	gen: string
}

export const SearchResults = ({ close, list }: ListProps) => {
	return (
		<>
			{list.map(res => (
				<Link
					className='w-full '
					href={`/gen/${res.gen}/${res.name}`}
					key={res.id}
					onClick={close}
				>
					<div className=' hover:bg-slate-800 p-3 rounded w-full flex items-stretch justify-between text-white bg-slate-600'>
						<div className='flex gap-3'>
							<div className='text-gray-400'>{res.id}</div>
							<div className='font-semibold'>{res.name}</div>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='22'
							height='22'
							viewBox='0 0 22 22'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<polyline points='9 10 4 15 9 20'></polyline>
							<path d='M20 4v7a4 4 0 0 1-4 4H4'></path>
						</svg>
					</div>
				</Link>
			))}
		</>
	)
}
