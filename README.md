# Andor Eleventy

Small one page website on the Andor series running on 11ty and NPM scripts.

## Installation

1. Install Node and NPM
2. Run `npm run dev` to spin a dev server with JS and CSS hot reloading
3. Run `npm run build` to build everything in `./dist` for production

## NPM scripts

The `css:prod` and `js:prod` commands are identical to their `css:dev` and `js:dev` counterparts, we only add a flag (`--minify` in these cases). We take advantage of an NPM feature to avoid retyping everything.

We use:
`"css:prod": "npm run css:dev -- --minify"`

instead of
`lightningcss --bundle --minify \"./src/assets/css/styles.css\" -o \"./dist/assets/css/styles.css\"`
