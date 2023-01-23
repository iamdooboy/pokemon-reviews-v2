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
			<body className='bg-gray-800'>
				<div className='max-w-7xl mx-auto '>
					<div className='hidden sm:grid grid-cols-8'>
						<div className='sticky top-0 self-start col-span-3 p-5'>
							<div className=' flex items-stretch justify-between'>
								<a
									href='#'
									className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
								>
									Prev
								</a>
								<a
									href='#'
									className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
								>
									Surprise Me
								</a>
								<a
									href='#'
									className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
								>
									Next
								</a>
							</div>
							<Sidebar />
						</div>
						<div className='col-span-5 p-5 overflow-auto border-l-[1px] border-gray-700'>
							{children}
						</div>
					</div>
					<div className='block sm:hidden '>
						<div className='flex items-stretch justify-between'>
							<a
								href='#'
								className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
							>
								Prev
							</a>
							<a
								href='#'
								className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
							>
								Surprise Me
							</a>
							<a
								href='#'
								className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
							>
								Next
							</a>
						</div>
						<div className='flex w-full '>
							<Sidebar />
						</div>
						<div className='overflow-auto'>{children}</div>
					</div>
				</div>
			</body>
		</html>
	)
}
