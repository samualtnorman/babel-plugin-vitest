# Babel Plugin Vitest (`babel-plugin-vitest`)

This a plugin for [Babel](https://babeljs.io/) that replaces instances of `import.meta.vitest` in your code with
`undefined`.

This plugin should be put in your babel config when you are using [Vitest](https://vitest.dev/)'s
[In-Source Testing](https://vitest.dev/guide/in-source.html) feature.

## Setup
### Install

```sh
npm install --save-dev babel-plugin-vitest
```

### Babel config

`babel.config.json`

```json
{
	"plugins": [ "babel-plugin-vitest" ]
}
```

## Example
### In
`src/index.js`

```js
// the implementation
export function add(...args) {
	return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it('add', () => {
		expect(add()).toBe(0)
		expect(add(1)).toBe(1)
		expect(add(1, 2, 3)).toBe(6)
	})
}
```

### Out

`dist/index.js`

```js
// the implementation
export function add(...args) {
	return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (undefined) {
	const { it, expect } = import.meta.vitest
	it('add', () => {
		expect(add()).toBe(0)
		expect(add(1)).toBe(1)
		expect(add(1, 2, 3)).toBe(6)
	})
}
```
