export const Navbar = () => {
	return (
		<div className='fixed top-0 z-10 flex w-full lg:w-1/3 flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:border-r lg:border-gray-800'>
			<div className='m-auto border-indigo-600 border-2 rounded-lg '>
				<img
					className='w-full'
					src='https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/images/0006.png'
					alt='Sunset in the mountains'
				/>
				<div className='px-6 py-4'>
					<div className=' text-zinc-200 font-bold text-xl mb-2'>Charizard</div>
					<p className='text-gray-700 text-base'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Voluptatibus quia, nulla! Maiores et perferendis eaque,
						exercitationem praesentium nihil.
					</p>
				</div>
				<div className='px-6 pt-4 pb-2'>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#photography
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#travel
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						#winter
					</span>
				</div>
			</div>
		</div>
	)
}
