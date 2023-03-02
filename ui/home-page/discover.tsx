import React from 'react'
import { Box } from './box'
import { Header } from './header'
import { POKEMON } from 'homepage'

export const Discover = () => {
	return (
		<Box colSpan={6}>
			<Header>Discover highly rated Pokemon</Header>
			<div className='grid grid-cols-6 gap-16'>
				{POKEMON.map(eachPokemon => (
					<div className='col-span-1'>
						<div className=''>
							<img src={eachPokemon.image} />
						</div>
					</div>
				))}
			</div>
		</Box>
	)
}
