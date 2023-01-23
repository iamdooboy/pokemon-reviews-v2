const Rating = () => (
	<div className='flex items-center'>
		<svg
			aria-hidden='true'
			className='text-yellow-400 w-7 h-7'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>First star</title>
			<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
		</svg>
		<svg
			aria-hidden='true'
			className='text-yellow-400 w-7 h-7'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Second star</title>
			<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
		</svg>
		<svg
			aria-hidden='true'
			className='text-yellow-400 w-7 h-7'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Third star</title>
			<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
		</svg>
		<svg
			aria-hidden='true'
			className='text-yellow-400 w-7 h-7'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Fourth star</title>
			<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
		</svg>
		<svg
			aria-hidden='true'
			className='text-gray-300 w-7 h-7 dark:text-gray-500'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>Fifth star</title>
			<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
		</svg>
	</div>
)

export const Navbar = () => {
	return (
		<nav className='lg:w-1/3 md:w-1/3 sm:w-full flex-none bg-gray-800 px-2 overflow-y-hidden border-r border-gray-700'>
			<div className='flex overflow-y-auto'>
				<div className='bg-gradient-to-br from-blue-400 to-red-500 rounded-lg p-[3px]'>
					<div
						className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4
'
					>
						<div>
							<img
								className='w-full p-2 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-500'
								src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006.png'
								alt='Sunset in the mountains'
							/>
							<div className='flex items-center justify-between'>
								<span className='text-2xl font-bold text-gray-900 dark:text-white'>
									Squawkabilly
								</span>
								<span className='text-2xl font-light text-gray-900 dark:text-gray-400'>
									#0001
								</span>
							</div>
							<div className='flex items-center justify-between'>
								<div>
									<div className='flex gap-2'>
										<img
											className='w-14'
											src='https://pokemon-reviews.vercel.app/type/flying.png'
											alt='flying'
										/>
										<img
											className='w-14'
											src='https://pokemon-reviews.vercel.app/type/fire.png'
											alt='fire'
										/>
									</div>
									<Rating />
								</div>
								<div>
									<span className='text-4xl font-bold text-gray-900 dark:text-white'>
										3.7
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
