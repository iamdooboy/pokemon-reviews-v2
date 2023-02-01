import NextLink from 'next/link'

export default async function Page() {
	return (
		<div className='flex flex-col items-center'>
			<h1>Hello, Next.js!</h1>

			{Array(9)
				.fill(1)
				.map((_, i) => (
					<NextLink
						key={i}
						className='bg-slate-600 text-white'
						href={`/gen/${i + 1}`}
					>
						Gen {i + 1}{' '}
					</NextLink>
				))}
		</div>
	)
}
