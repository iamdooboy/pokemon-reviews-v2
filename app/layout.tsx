import './globals.css'

export const dynamic = 'force-dynamic'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-gray-800 min-h-screen'>
				<div className='sticky top-0 flex content-center w-full max-w-full z-40 min-h-[64px] bg-blue-900'>
					<header className='mx-auto flex flex-row justify-between content-between w-full'>
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
