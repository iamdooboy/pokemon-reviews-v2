import React from 'react'
import { Rating } from './rating'
export const Sidebar = () => {
	return (
		<div className='flex flex-col items-stretch justify-start grid-gap'>
			<div className='bg-gradient-to-br from-blue-400 to-red-500 rounded-lg p-[3px]'>
				<div
					className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4
'
				>
					<div>
						<div className='p-2 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-500'>
							<div className='fixed text-3xl lg:text-5xl md:text-4xl font-bold opacity-25 text-white'>
								リザードン
							</div>
							<img
								src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006.png'
								alt='Sunset in the mountains'
							/>
						</div>

						<div className='flex items-center justify-between my-2'>
							<span className=' text-4xl lg:text-4xl md:text-2xl sm:text-2xl font-bold text-gray-900 dark:text-white'>
								Hitmonchan
							</span>
							<span className='text-2xl sm:text-lg font-sans text-gray-900 dark:text-gray-400'>
								#0001
							</span>
						</div>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col gap-2'>
								<div className='flex gap-2'>
									<img
										className='sm:w-10 lg:w-14 w-14'
										src='https://pokemon-reviews.vercel.app/type/flying.png'
										alt='flying'
									/>
									<img
										className='sm:w-10 lg:w-14 w-14'
										src='https://pokemon-reviews.vercel.app/type/fire.png'
										alt='fire'
									/>
								</div>
								<Rating />
							</div>
							<div>
								<span className='text-7xl lg:text-7xl sm:text-5xl font-extrabold text-gray-900 dark:text-white'>
									3.7
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
