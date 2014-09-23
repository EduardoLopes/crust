# Crust

A boilerplate to start my new projects.

Usage
-----
install [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) `npm install --global gulp`

run `sh crust.sh` to delete some files

Gulp
-----

`gulp server` to run a server with live reload (localhost:9000)

`gulp watch` livereload (without a server, is fester than `gulp server`)

`gulp` to 'compile' the app and generate a folder like this:

```
dist
├── apple-touch-icon-precomposed.png
├── css
│   ├── main.css
│   └── main.min.css
├── favicon.ico
├── humans.txt
├── index.html
├── js
│   ├── main.js
│   └── vendor
│       ├── jquery-1.10.2.min.js
│       └── modernizr-2.6.2.min.js
└── robots.txt
```

