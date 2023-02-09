import NextLink from 'next/link'
import { cookies } from 'next/headers'

export default async function Page() {
	// const nextCookies = cookies()
	// const cookie_object = nextCookies.get('pb_auth')
	// //const cookie_string = cookie_object.name + '=' + cookie_object.value;
	// console.log(cookie_object)
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
