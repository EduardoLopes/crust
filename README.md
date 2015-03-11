# Crust

A boilerplate to start my new projects.

Usage
-----
install [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) `npm install --global gulp`

run `sh crust.sh` to delete some files

Gulp
-----

`gulp` to run browserify (+watchify) and a browser sync server

`gulp dist` to 'compile' the app and generate a folder like this:

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
│   ├── main.min.js
│   └── vendor
│       ├── jquery-1.10.2.min.js
│       └── modernizr-2.6.2.min.js
└── robots.txt
```