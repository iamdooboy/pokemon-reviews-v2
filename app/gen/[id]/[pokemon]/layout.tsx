import { Sidebar } from 'ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
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
	)
}
