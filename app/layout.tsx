import './globals.css'
import { clsx } from 'clsx'
import { Header } from '../ui/header'

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
				<Header />
				{children}
			</body>
		</html>
	)
}
