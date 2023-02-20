import { dirname, fromFileUrl, join, resolve } from "https://deno.land/std@0.177.0/path/mod.ts";

import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";
import { slugify } from "https://deno.land/x/slugify@0.3.0/mod.ts";

const books = [
    "100 Front End Interview Questions",
    "Modern PHP Web Development with MySQL, GitHub and Heroku",
    "Use HTML and CSS to Create a Responsive Website",
    "ASP.NET Core in Action, Second Edition",
    "Svelte and Sapper in Action",
    "Irresistible APIs",
    "Algorithms of the Intelligent Web, Second Edition",
    "Go Web Programming",
    "Building the Web of Things",
    "Design for the Mind",
    "Reactive Data Handling",
    "Reactive Web Applications",
    "Express in Action",
    "Using the Web to Build the IoT",
    "Getting MEAN with Mongo, Express, Angular, and Node",
    "SPA Design and Architecture",
    "Meteor in Action",
    "Rails 4 in Action",
    "jQuery in Action, Third Edition",
    "AngularJS in Action",
    "D3.js in Action",
    "JavaScript Application Design",
    "Node.js in Practice",
    "ArcGIS Web Development",
    "CORS in Action",
    "The Responsive Web",
    "jQuery UI in Action",
    "Ember.js in Action",
    "CoffeeScript in Action",
    "HTML5 in Action",
    "Play for Java",
    "Ext JS in Action, Second Edition",
    "Node.js in Action",
    "Single Page Web Applications",
    "Extending jQuery",
    "Sass and Compass in Action",
    "Third-Party JavaScript",
    "Dart in Action",
    "Secrets of the JavaScript Ninja",
    "Hello! HTML5 & CSS3",
    "Liferay in Action",
    "Rails 3 in Action",
    "Ext JS in Action",
    "Flex 4 in Action",
    "Flex on Java",
    "Hello! Flex 4",
    "Website Owner's Manual",
    "Algorithms of the Intelligent Web",
    "Flex 3 in Action",
    "iPhone in Action",
    "Zend Framework in Action",
    "Adobe AIR in Action",
    "GWT in Practice",
    "Laszlo in Action",
    "jQuery in Action",
    "Flexible Rails",
    "Ajax in Practice",
    "Prototype and Scriptaculous in Action",
    "iBATIS in Action",
    "iText in Action",
    "Ruby for Rails",
    "Ajax in Action",
    "WebWork in Action",
    "Explorer's Guide to the Semantic Web",
    "Tapestry in Action",
    "Web Development with Apache and Perl",
    "Web Development with JavaServer Pages, Second Edition",
    "Illustrated Guide to HTTP"
].map((title) => ({
    title,
    id: crypto.randomUUID(),
    description: faker.lorem.paragraphs(Math.floor(Math.random() * (5 - 2) + 2)).replace(),
    cover: "https://picsum.photos/720/1080",
    tags: Array.from({ length: Math.floor(Math.random() * (5 - 1) + 1) }).map(() => faker.hacker.noun()),
    slug: slugify(title)
}))

const writeData = (filename: string, data: unknown) => Deno.writeFile(filename, new TextEncoder().encode(JSON.stringify(data, null, 2)))

const currentDirname = dirname(fromFileUrl(import.meta.url))
const dataDirname = resolve(currentDirname, "../data")
const dataFilename = join(dataDirname, "books.json")

try {
    await Deno.stat(dataDirname)
    await Deno.stat(dataFilename)
} catch (error) {
    if (error instanceof Deno.errors.NotFound) {
        await Deno.mkdir(dataDirname)
        await writeData(dataFilename, books)
    } else {
        console.error(error)
    }
}
