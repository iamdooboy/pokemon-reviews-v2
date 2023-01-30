'use client'
import useSWRImmutable from 'swr/immutable'

export const useFetchAll = () => {
	const { data, error, isLoading } = useSWRImmutable('/pokemon', () =>
		fetch('https://funny-elk-apron.cyclic.app/api/pokemon').then(
			async res => await res.json()
		)
	)

	return {
		pokemon: data,
		error,
		isLoading
	}
}

//NOT USED
