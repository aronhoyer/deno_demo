import { dirname, fromFileUrl, resolve } from "https://deno.land/std@0.177.0/path/mod.ts"
import { Status, STATUS_TEXT } from "https://deno.land/std@0.177.0/http/http_status.ts"

const currentDir = dirname(fromFileUrl(import.meta.url))
const dataPath = resolve(currentDir, "../../data/books.json")

export const getBookByID = async (req: Request) => {
    const url = new URL(req.url)
    const match = new URLPattern("/books/:id", url.origin).exec(req.url)

    try {
        const fileContent = await Deno.readFile(dataPath)
        const books = JSON.parse(new TextDecoder().decode(fileContent))

        const book = books.find((b: Record<string, unknown>) => b.id === match?.pathname.groups.id)

        if (!book) {
            return Response.json({ error: STATUS_TEXT[Status.NotFound] }, {
                status: Status.NotFound,
                statusText: STATUS_TEXT[Status.NotFound],
            })
        }

        return Response.json(book)
    } catch (error) {
        return Response.json({ error: error.message }, {
            status: Status.InternalServerError,
            statusText: STATUS_TEXT[Status.InternalServerError],
        })
    }
}