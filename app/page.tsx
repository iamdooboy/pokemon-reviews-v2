import NextLink from 'next/link'

export default function Page() {
	return (
		<>
			<h1>Hello, Next.js!</h1>
			<NextLink className='bg-slate-600 text-white' href='/gen/1'>
				gen 1{' '}
			</NextLink>
			<NextLink className='bg-slate-600 text-white' href='/gen/2'>
				gen 2{' '}
			</NextLink>
			<NextLink className='bg-slate-600 text-white' href='/gen/3'>
				gen 3{' '}
			</NextLink>
			<NextLink className='bg-slate-600 text-white' href='/gen/4'>
				gen 4{' '}
			</NextLink>
			<NextLink className='bg-slate-600 text-white' href='/gen/5'>
				gen 5{' '}
			</NextLink>
			<NextLink className='bg-slate-600 text-white' href='/gen/6'>
				gen 6{' '}
			</NextLink>
		</>
	)
}
