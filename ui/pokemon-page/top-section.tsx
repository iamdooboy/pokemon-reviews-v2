import Link from 'next/link'
import { Nav } from 'types/typings'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
	prev: Nav
	next: Nav
	children: React.ReactNode
}

export const TopSection = ({ prev, next, children }: Props) => {
	return (
		<div className='flex justify-between mb-4'>
			<Link
				href={`/gen/${prev.gen}/${prev.name}`}
				className='rounded-lg text-white hover:bg-slate-600'
			>
				<div className='flex place-items-center justify-center gap-2'>
					<ArrowLeft />
					<img
						className='w-10 aspect-square'
						src={`https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/${prev.id}.png`}
					/>
				</div>
			</Link>
			{children}
			<Link
				href={`/gen/${next.gen}/${next.name}`}
				className='rounded-lg text-white hover:bg-slate-600'
			>
				<div className='flex place-items-center justify-center gap-2'>
					<img
						className='w-10 aspect-square'
						src={`https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/${next.id}.png`}
					/>
					<ArrowRight />
				</div>
			</Link>
		</div>
	)
}
