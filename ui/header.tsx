import { SearchButton } from './search-button'
import dynamic from 'next/dynamic'

const HeaderMenu = dynamic(
	() => import('./header-avatar').then(mod => mod.HeaderAvatar),
	{ ssr: false }
)

export const Header = () => {
	return (
		<div className='sticky top-0 z-40 w-full flex content-center max-w-full min-h-[64px] bg-gray-800 border-b border-gray-600 items-center justify-center'>
			<div className='w-full flex flex-1 md:justify-between max-w-6xl px-4 md:px-0'>
				<div className='md:flex content-center items-center hidden'>
					<img className='w-14' src='/logo2.svg' />
					<a className='text-white font-bold' href='/'>
						Rate My Pokemon
					</a>
				</div>
				<div className='flex w-full items-center justify-center'>
					<SearchButton />
				</div>
				<div className='flex items-center'>
					<HeaderMenu />
				</div>
			</div>
			{/* <div className='flex content-center items-center w-full'>
				<div className='md:ml-auto'>
					<span className='box-border'>
						<div className='flex flex-1'>
							<SearchButton />
							<HeaderMenu />
						</div>
					</span>
				</div>
			</div> */}
			{/* <header className='mx-auto flex flex-row justify-between content-between w-full max-w-6xl'>
				<div className='hidden md:inline-flex flex-1 content-center items-center justify-between gap-2'>
					<div className='flex content-center items-center'>
						<img className='w-14' src='/logo2.svg' />
						<a className='text-white font-bold' href='/'>
							Rate My Pokemon
						</a>
					</div>
					<SearchButton />
					<HeaderMenu />
				</div>
				<div className='flex flex-1 content-center items-center w-full text-white'>
					<button>Generation</button>
				</div>
				
			</header> */}
		</div>
	)
}
