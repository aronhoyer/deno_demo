import { dirname, fromFileUrl, resolve } from "https://deno.land/std@0.177.0/path/mod.ts"
import { Status, STATUS_TEXT } from "https://deno.land/std@0.177.0/http/http_status.ts"

const currentDir = dirname(fromFileUrl(import.meta.url))
const dataPath = resolve(currentDir, "../../data/books.json")

export const getAllBooks = async () => {
    try {
        const fileContent = await Deno.readFile(dataPath)
        return new Response(fileContent, {
            headers: { "content-type": "application/json" },
        })
    } catch (error) {
        return Response.json({ error: error.message }, {
            status: Status.InternalServerError,
            statusText: STATUS_TEXT[Status.InternalServerError],
        })
    }
}