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
		<div className='mx-auto flex max-w-6xl flex-col items-start md:flex-row lg:px-8'>
			<div className='w-full md:sticky md:top-16 md:w-[28rem] p-5'>
				<Card />
			</div>
			<div className='mt-0 w-full min-w-0 flex-1 md:mt-0'>
				<div className='w-full min-w-0 flex-1 md:mt-0'>
					<dl className='grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16'></dl>
				</div>
			</div>
		</div>
	)
}

export default Loading
