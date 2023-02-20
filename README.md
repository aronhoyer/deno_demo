# Brief presentation of Deno

You can find the slides here: [https://www.figma.com/proto/GCvsSeOP1qKBkBUFyHcV3T/Deno-presentation-slides?page-id=0%3A1&node-id=1%3A2&viewport=1039%2C665%2C0.26&scaling=contain&starting-point-node-id=1%3A2](https://www.figma.com/proto/GCvsSeOP1qKBkBUFyHcV3T/Deno-presentation-slides?page-id=0%3A1&node-id=1%3A2&viewport=1039%2C665%2C0.26&scaling=contain&starting-point-node-id=1%3A2)

## Getting started

Ensure that you have Deno installed ([see install instructions](https://deno.land/manual@v1.30.3/getting_started/installation)).

```sh
git clone git@github.com:aronhoyer/deno_demo.git
cd deno_demo
deno run --allow-read --allow-write scripts/makeFakeBooks.ts
deno task dev
```

If you're using VSCode, you should install the [Deno VSCode extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno).
