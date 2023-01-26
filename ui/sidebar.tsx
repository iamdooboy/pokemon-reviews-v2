import React from 'react'
import { Rating } from './rating'
import { fromDefault, toDefault, toLight } from '../types/types'

interface Props {
	data: DataProps
}

interface DataProps {
	name: string
	image: string
	id: string
	types: [string, string]
}

export const Sidebar: React.FC<Props> = ({ data }): JSX.Element => {
	return (
		<div className='flex flex-col items-stretch justify-start grid-gap'>
			<div
				className={`rounded-lg p-[3px] bg-gradient-to-br ${
					fromDefault[data.types[0]]
				} ${data.types[1] ? toDefault[data.types[1]] : toLight[data.types[0]]}`}
			>
				<div
					className='h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4
'
				>
					<div>
						<div className='p-2 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-500'>
							<div className='fixed text-5xl lg:text-6xl md:text-3xl font-bold opacity-25 text-white'>
								リザードン
							</div>
							<img src={data.image} alt={data.name} />
						</div>

						<div className='flex items-center justify-between'>
							<span className='text-4xl sm:text-2xl lg:text-4xl md:text-3xl font-bold text-white'>
								{data.name}
							</span>
							<span className='text-xl sm:text-md font-sans text-gray-400'>
								&#35;{data.id}
							</span>
						</div>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col gap-2'>
								<div className='flex gap-2'>
									{data.types.map(type => (
										<img
											key={type}
											className='w-12 sm:w-10 lg:w-12'
											src={`/types/${type}.png`}
											alt={type}
										/>
									))}
								</div>
								<Rating />
							</div>
							<div>
								<span className='text-7xl lg:text-7xl sm:text-5xl font-extrabold text-gray-900 dark:text-white'>
									3.7
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
