import { MutableRefObject, useEffect } from 'react'

export const useClick = (
	ref: MutableRefObject<null | HTMLDivElement>,
	callback: () => void
) => {
	const handleClick = ({ target }: MouseEvent): void => {
		if (ref.current && !ref.current.contains(target as Node)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	})
}
