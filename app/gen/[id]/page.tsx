import { Grid } from '@/ui/gen-page/grid'
import { Pokemon } from 'types/typings'
import { TestLayout } from '@/ui/TestLayout'

async function getGen(id: string): Promise<Pokemon[]> {
	try {
		const res = await fetch(`https://funny-elk-apron.cyclic.app/api/gen/${id}`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
		return []
	}
}

interface GenProps {
	params: {
		id: string
	}
}

export default async function Page({ params }: GenProps) {
	const pokemon = await getGen(params.id)

	return (
		<div className='h-full max-h-screen'>
			<div className='mx-auto max-w-6xl p-4 align-center'>
				<TestLayout pokemon={pokemon} />
			</div>
		</div>
		// <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
		// 	<div className='grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8'>
		// 		<Grid pokemon={pokemon} />
		// 	</div>
		// </div>
	)
}
