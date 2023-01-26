import './globals.css'
import { clsx } from 'clsx'

import { Inter as FontSans } from '@next/font/google'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={clsx('bg-gray-800 min-h-screen', fontSans.variable)}>
				<div className='sticky top-0 flex content-center w-full max-w-full z-40 min-h-[64px] bg-gray-800'>
					<header className='mx-auto flex flex-row justify-between content-between w-full border-b border-gray-600'>
						<div className='flex flex-1 content-center items-center'>
							<button>Review</button>
						</div>
						<div className='flex flex-1 content-center items-center w-full'>
							<button>Review</button>
						</div>
						<div className='flex flex-1 content-center items-center'>
							<div className='ml-auto'>
								<span className='box-border'>
									<div className='flex items-center'>
										<div className='pointer-events-auto'></div>
									</div>
									<div className='flex items-stretch content-start flex-1'>
										<img
											src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
											className='rounded-full w-10'
											alt='Avatar'
										/>
									</div>
								</span>
							</div>
						</div>
					</header>
				</div>
				{children}
			</body>
		</html>
	)
}
