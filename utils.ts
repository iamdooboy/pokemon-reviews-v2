export const getRandomInt = (min: number, max: number): string => {
	min = Math.ceil(min)
	max = Math.floor(max)
	const num = Math.floor(Math.random() * (max - min) + min)
	return String(num).padStart(4, '0')
}
