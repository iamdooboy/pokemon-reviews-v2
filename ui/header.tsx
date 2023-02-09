import { SearchButton } from './search-button'
import { HeaderAvatar } from './header-avatar'

export const Header = () => {
	return (
		<div className='sticky top-0 z-40 w-full flex content-center max-w-full min-h-[64px] bg-gray-800 border-b border-gray-600'>
			<header className='mx-auto flex flex-row justify-between content-between w-full max-w-6xl'>
				<div className='inline-flex flex-1 content-center items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='25'
						height='25'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#ffffff'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z'></path>
						<path d='M5.341 10.62a4 4 0 1 0 5.279-5.28'></path>
					</svg>
					<a className='text-white font-bold' href='/'>
						Rate My Pokemon
					</a>
				</div>
				<div className='flex flex-1 content-center items-center w-full text-white'>
					<button>Generation</button>
				</div>
				<div className='flex flex-1 content-center items-center'>
					<div className='ml-auto'>
						<span className='box-border'>
							<div className='flex items-stretch content-start flex-1'>
								<SearchButton />
								<HeaderAvatar />
								{/* <img
									src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
									className='rounded-full w-10 hidden sm:inline'
									alt='Avatar'
								/> */}
							</div>
						</span>
					</div>
				</div>
			</header>
		</div>
	)
}
