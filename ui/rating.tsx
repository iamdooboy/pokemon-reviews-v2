'use client'

import { Icon } from './icon'
import { useState } from 'react'

interface PropTypes {
	ratingInPercent?: number
	iconSize: string
	showOutOf: boolean
	enableUserInteraction: boolean
	onClick: (value: number) => void
}

const SIZES = {
	SMALL: {
		key: 's',
		size: 10
	},
	MEDIUM: {
		key: 'm',
		size: 18
	},
	LARGE: {
		key: 'l',
		size: 28
	}
}

export const Rating = (props: PropTypes) => {
	const {
		iconSize,
		ratingInPercent,
		showOutOf,
		enableUserInteraction,
		onClick
	} = props

	const [activeStar, setActiveStar] = useState(-1)
	const [hover, setHover] = useState(-1)
	const [click, setClick] = useState(false)
	const decimal = ratingInPercent ? ratingInPercent / 20 : 0
	const nonFraction = Math.trunc(decimal)
	const fraction = Number((decimal - nonFraction).toFixed(2))
	const fractionPercent = fraction * 100

	const size =
		iconSize === SIZES.SMALL.key
			? SIZES.SMALL.size
			: iconSize === SIZES.MEDIUM.key
			? SIZES.MEDIUM.size
			: SIZES.LARGE.size

	const RatingHighlighted = (
		<Icon type={'ratingHighlighted'} width={size} height={size} />
	)
	const RatingDefault = (
		<Icon type={'ratingDefault'} width={size} height={size} />
	)

	const handleClick = (index: number) => {
		onClick(index + 1)
		setClick(true)
		setActiveStar(index)
	}

	const handleMouseEnter = (index: number) => {
		setHover(activeStar)
		setActiveStar(index)
	}

	const handleMouseLeave = () => {
		if (click) {
			setClick(false)
			return
		} else {
			setActiveStar(hover)
		}
	}

	const showDefaultStar = () => {
		return RatingDefault
	}

	let isShow = true

	const getStar = (index: number) => {
		if (index <= nonFraction - 1) {
			isShow = true
			return '100%'
		} else if (fractionPercent > 0 && isShow) {
			isShow = false
			return `${fractionPercent}%`
		} else {
			return '0%'
		}
	}

	const isShowOutOfStar = (index: number) => {
		if (showOutOf) {
			return showOutOf
		}

		if (typeof index === undefined) return

		const isLoopThrough = (fraction === 0 ? nonFraction : nonFraction + 1) - 1
		return index <= isLoopThrough
	}

	const withoutUserInteraction = (index: number) => {
		return isShowOutOfStar(index) ? (
			<div style={{ position: 'relative' }} key={index}>
				<div
					style={{
						width: getStar(index),
						overflow: 'hidden',
						position: 'absolute'
					}}
				>
					{RatingHighlighted}
				</div>
				{showDefaultStar()}
			</div>
		) : null
	}

	const withUserInteraction = (index: number) => {
		return (
			<div
				style={{ position: 'relative' }}
				onClick={() => handleClick(index)}
				onMouseEnter={() => handleMouseEnter(index)}
				onMouseLeave={handleMouseLeave}
				key={index}
			>
				<div
					style={{
						width: index <= activeStar ? '100%' : '0%',
						overflow: 'hidden',
						position: 'absolute'
					}}
				>
					{RatingHighlighted}
				</div>
				{showDefaultStar()}
			</div>
		)
	}

	return (
		<div className='grid left-0 grid-flow-col relative cursor-pointer text-left gap-1'>
			{[...new Array(5)].map((_, index) =>
				enableUserInteraction
					? withUserInteraction(index)
					: withoutUserInteraction(index)
			)}
		</div>
	)
}
