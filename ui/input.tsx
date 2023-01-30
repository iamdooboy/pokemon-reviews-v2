'use client'

import { ChangeEventHandler } from 'react'

type InputProps = {
	onChange: ChangeEventHandler<HTMLInputElement>
	children: React.ReactNode
}

export const Input = ({ onChange, children }: InputProps) => (
	<div
		onClick={e => e.stopPropagation()} //prevent closing modal if content inside is clicked
		className='relative rounded-lg shadow bg-gray-700'
	>
		<div className='flex items-center justify-between rounded-t border-gray-600'>
			<form className='flex flex-col items-start w-full gap-2 p-4'>
				<div className='relative w-full flex items-center gap-3 py-4 px-2'>
					<svg
						aria-hidden='true'
						className='w-8 h-8 text-gray-400'
						fill='white'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clipRule='evenodd'
						></path>
					</svg>

					<input
						onChange={onChange}
						max='1008'
						autoFocus
						type='text'
						placeholder='Seach Pokemon'
						className=' text-white rounded-lg block w-full focus:outline-none bg-gray-700 text-xl'
					/>
				</div>
				{children}
			</form>
		</div>
	</div>
)
