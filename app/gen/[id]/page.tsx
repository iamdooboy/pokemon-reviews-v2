import axios from 'axios'
import { Grid } from '../../../ui/grid'
import { TestGrid } from 'ui/test-grid'

async function getGen(id: string) {
	const res = await axios
		.get(`https://funny-elk-apron.cyclic.app/api/gen/${id}`)
		.then(res => res.data)
	return res
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
