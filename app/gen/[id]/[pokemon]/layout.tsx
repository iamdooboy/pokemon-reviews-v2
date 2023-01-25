export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='grid grid-cols-8'>{children}</div>
		</div>
	)
}
