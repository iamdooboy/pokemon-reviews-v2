export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='mt-[calc(-1*64px)] pt-[64px]'>
			<div className='h-full max-w-6xl mx-auto'>{children}</div>
		</div>
	)
}
