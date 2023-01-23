import axios from 'axios'
import NextLink from 'next/link'

export async function getGen(id: string) {
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

interface Pokemon {
	id: string
	name: string
	types: [string, string]
	image: string
	default: string
}

export default async function Page({ params }: GenProps) {
	const pokemon = await getGen(params.id)

	return (
		<>
			<div>Gen {params.id}</div>
			{pokemon.map((p: Pokemon) => (
				<NextLink key={p.id} href={`/gen/${params.id}/${p.name}`}>
					<div>{p.name}</div>
				</NextLink>
			))}
		</>
	)
}
