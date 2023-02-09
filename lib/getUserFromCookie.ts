import { ReadonlyRequestCookies } from 'next/dist/server/app-render'

import { pb } from './pocketbase'

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns User or null
 * @author Arif "poltang" Muslax
 * @see {@link https://github.com/vvo/iron-session/issues/560#issuecomment-1324598048}
 */
function getUserFromCookie(cookies: ReadonlyRequestCookies) {
	const authCookie = cookies.get('pb_auth')

	if (!authCookie) return null

	pb.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`)
	const user = pb.authStore.model

	return user as unknown
}

export { getUserFromCookie }
