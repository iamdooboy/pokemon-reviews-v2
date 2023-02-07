import PocketBase from 'pocketbase'

export const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_URL)
// export const pb = new PocketBase('http://127.0.0.1:8090')

export const currentUser = pb.authStore.model
