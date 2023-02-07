const Card = () => (
	<div className='flex flex-col items-stretch justify-start grid-gap animate-pulse'>
		<div className='rounded-lg p-[3px] bg-gray-700'>
			<div className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>
				<div>
					<div className='p-2 bg-gray-700 rounded-md aspect-square'>
						<div className='w-auto h-auto bg-transparent' />
					</div>
					<div className='flex flex-col gap-3 mt-3'>
						<div className='h-10 w-full bg-gray-700 rounded-lg' />
						<div className='flex gap-3'>
							<div className='w-2/3 flex flex-col gap-3'>
								<div className='h-10 w-full bg-gray-700 rounded-lg' />
								<div className='h-10 w-full bg-gray-700 rounded-lg' />
							</div>
							<div className='w-1/3'>
								<div className='h-full bg-gray-700 rounded-lg' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

const Loading = () => {
	return (
		<div className='mt-[calc(-1*64px)] pt-[64px]'>
			<div className='h-full max-w-6xl mx-auto'>
				<div className='sm:grid sm:grid-cols-8 h-[calc(100vh-64px)]'>
					<div className='block sm:sticky top-[64px] self-start col-span-3 p-5'>
						<Card />
					</div>
					<div className='p-5 col-span-5 overflow-auto sm:border-l border-gray-600'></div>
				</div>
			</div>
		</div>
	)
}

export default Loading
