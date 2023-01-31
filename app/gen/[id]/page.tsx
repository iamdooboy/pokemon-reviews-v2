import { Grid } from '@/ui/grid'
import { Pokemon } from 'types/typings'
//import { TestGrid } from 'ui/test-grid'

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

	return <Grid pokemon={pokemon} />
}
