// import PocketBase from 'pocketbase'

// export const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_URL)

// pb.authStore.loadFromCookie(document.cookie)

// pb.authStore.onChange(() => {
// 	document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
// })
// // export const pb = new PocketBase('http://127.0.0.1:8090')
// // if (typeof document !== 'undefined') {
// // 	pb.authStore.loadFromCookie(document.cookie)

// // 	pb.authStore.onChange(() => {
// // 		document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
// // 	})
// // }

import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_URL)

if (typeof document !== 'undefined') {
	pb.authStore.loadFromCookie(document.cookie)

	pb.authStore.onChange(() => {
		document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
	})
}

export const currentUser = pb.authStore.model

export { pb }
