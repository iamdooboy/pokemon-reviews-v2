'use client'

import { useState, useEffect } from 'react'
import { pb } from '@/lib/pocketbase'

export const Test = ({ reviews }: any) => {
	const [data, setData] = useState(reviews)

	useEffect(() => {
		pb.collection('reviews').subscribe('*', function (e) {
			console.log(e.record)
		})
		return () => {
			pb.collection('reviews').unsubscribe()
		}
	}, [])

	return <div>hello</div>
}
