import { Status, STATUS_TEXT } from "https://deno.land/std@0.177.0/http/http_status.ts"
import { Server } from "https://deno.land/std@0.177.0/http/mod.ts"
import { ServerInit } from "https://deno.land/std@0.177.0/http/server.ts"

import { pingHandler, getAllBooks, getBookByID } from "./handlers/mod.ts"

import { removeTrailingSlash } from "./lib/mod.ts"

const handler = (req: Request) => {
    const url = new URL(req.url)

    switch (true) {
        case removeTrailingSlash(url.pathname) === "/ping":
            return pingHandler()
        case removeTrailingSlash(url.pathname) === "/books":
            return getAllBooks()
        case new URLPattern("/books/:id", url.origin).test(req.url):
            return getBookByID(req)
        default:
            return Response.json({ error: STATUS_TEXT[Status.NotFound] }, {
                status: Status.NotFound,
                statusText: STATUS_TEXT[Status.NotFound],
            })
    }
}

export const server = (init: Omit<ServerInit, "handler">) => new Server({
    ...init,
    handler: handler,
})
