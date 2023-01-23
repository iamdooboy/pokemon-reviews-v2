import './globals.css'
import { Navbar } from 'ui/navbar'
import { Review } from '../ui/review'
import { Sidebar } from '../ui/sidebar'
import NextLink from 'next/link'

interface Nav {
	href: string
	text: string
}

export const dynamic = 'force-dynamic'

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
			<body className='bg-gray-800'>{children}</body>
		</html>
	)
}
