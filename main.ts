import { server } from "./www/mod.ts"

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Starting server on :8080")
  await server({ port: 8080 }).listenAndServe()
}
