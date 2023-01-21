import './globals.css'
import { Navbar } from 'ui/navbar'
import cn from 'classnames'
import NextLink from 'next/link'

interface Nav {
	href: string
	text: string
}

const NavItem = ({ href, text }: Nav) => {
	return (
		<NextLink
			href={href}
			className='font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
		>
			<span className='capsize'>{text}</span>
		</NextLink>
	)
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-gradient-to-r from-cyan-500 to-blue-500'>
				<Navbar />
				<div>{children}</div>
			</body>
		</html>
		// <html lang='en'>
		// 	<head />
		// 	<body className='min-h-screen dark:bg-slate-700 dark: text-white'>
		// 		<div className='header bg-teal-700 text-white sticky'>
		// 			<section className='max-w-2xl mx-auto p-4 flex justify-between items-center'>
		// 				<h1>Pokemon</h1>
		// 				<NavItem href='/gen' text='gen' />
		// 				<div className='flex gap-2'>
		// 					<button className='bg-gray-500 text-black flex ml-auto border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded'>
		// 						Search
		// 					</button>
		// 					<button className='bg-blue-300 text-black rounded flex ml-auto border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600'>
		// 						Login
		// 					</button>
		// 				</div>
		// 			</section>
		// 		</div>
		// 		<div>{children}</div>
		// 	</body>
		// </html>
	)
}
