export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='sm:grid sm:grid-cols-8'>{children}</div>
		</div>
	)
}
