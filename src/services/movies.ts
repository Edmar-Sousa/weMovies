import { ResponseAPIType } from "@/types"

export async function fetchMovies() {
    const response = await (await fetch(import.meta.env['API_URL'] || "http://localhost:3000/products")).json() as Array<ResponseAPIType>

    return response
}
