import { ReviewButton } from '@/ui/buttons/review-button'
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react'

interface Props {
	children: React.ReactNode
}

const Loading = () => {
	return (
		<div className='mt-[calc(-1*64px)] pt-[64px]'>
			<div className='h-full max-w-6xl mx-auto'>
				<div className='sm:grid sm:grid-cols-8 h-full max-h-screen'>
					<div className='block sm:sticky top-[64px] self-start col-span-3 p-5'>
						<Nav>
							<RefreshCw className='hover:rotate-180 duration-500 hover:text-gray-400' />
						</Nav>
						<div className='flex flex-col relative min-w-[1px] max-w-full content-start item-stretch'>
							<Card />
						</div>
						<div className='flex items-stretch justify-between pt-4'>
							<ReviewButton />
						</div>
					</div>
					{/* <ClientWrapper className='px-5 sm:p-5 col-span-5 overflow-auto'>
          <ListReviews pokemon={params.pokemon} />
        </ClientWrapper> */}
				</div>
			</div>
		</div>
	)
}

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

const Nav = ({ children }: Props) => (
	<div className='flex justify-between mb-4 text-gray-500'>
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
