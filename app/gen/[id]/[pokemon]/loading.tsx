import { ReviewButton } from '@/ui/buttons/review-button'
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react'

interface Props {
	children: React.ReactNode
}

const Loading = () => {
	return (
		<div className='mx-auto flex max-w-6xl flex-col items-start md:flex-row lg:px-8'>
			<div className='w-full md:sticky md:top-16 md:w-[28rem] p-5'>
				<Nav>
					<RefreshCw className='animate-spin duration-500 hover:text-gray-400' />
				</Nav>
				<Card />
				{/* <div className='flex items-stretch justify-between pt-4'>
					<ReviewButton />
				</div> */}
			</div>
			<div className='mt-0 w-full min-w-0 flex-1 md:mt-0'>
				<div className='w-full min-w-0 flex-1 md:mt-0'>
					<div className='grid grid-cols-1 gap-y-10 gap-x-8 md:max-w-xl lg:max-w-none lg:gap-y-16'>
						<div className='px-5 col-span-5 overflow-auto md:mt-5'>
							<div className='flex flex-col gap-4'>
								{[...Array(4)].map(_ => (
									<Review />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
const Review = () => (
	<div className='border border-gray-700 rounded-lg p-4 animate-pulse'>
		<div className='flex gap-3'>
			<div className=''>
				<span className='w-10 h-10 block bg-gray-200 rounded-full dark:bg-gray-700'></span>
			</div>
			<div className='flex flex-col w-full gap-3'>
				<div className='w-1/3 h-4 rounded-lg bg-gray-700'></div>
				<div className='w-1/4 h-4 rounded-lg bg-gray-700'></div>
			</div>
		</div>
		<div className='flex flex-col gap-3 mt-3'>
			<div className='w-full h-4 rounded-md bg-gray-700'></div>
			<div className='w-full h-4 rounded-md bg-gray-700'></div>
			<div className='w-full h-4 rounded-md bg-gray-700'></div>
		</div>
	</div>
)

const Card = () => (
	<div className='flex flex-col justify-start animate-pulse'>
		<div className='rounded-lg p-[3px] bg-gray-700'>
			<div className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>
				<div>
					<div className='p-2 bg-gray-700 rounded-md aspect-square'>
						<div className='w-auto h-auto bg-transparent' />
					</div>
					<div className='flex flex-col gap-3 mt-3'>
						<div className='h-8 w-full bg-gray-700 rounded-lg' />
						<div className='flex gap-3'>
							<div className='w-2/3 flex flex-col gap-3'>
								<div className='h-8 w-full bg-gray-700 rounded-lg' />
								<div className='h-8 w-full bg-gray-700 rounded-lg' />
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

const Nav = ({ children }: Props) => (
	<div className='flex justify-between mb-4 text-gray-500 items-center'>
		<Left />
		{children}
		<Right />
	</div>
)

const Left = () => (
	<div className='flex place-items-center justify-center gap-2'>
		<ArrowLeft />
		<img
			className='w-10 aspect-square'
			src={`https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0000.png`}
		/>
	</div>
)

const Right = () => (
	<div className='flex place-items-center justify-center gap-2'>
		<img
			className='w-10 aspect-square'
			src={`https://raw.githubusercontent.com/iamdooboy/pokemon-images/main/assets/sprites/0000.png`}
		/>
		<ArrowRight />
	</div>
)

export default Loading
