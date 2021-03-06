# Twig Translation Filter Extension

## Usage

Twig:
```twig
{{ 'test[0]'|t }}
{{ 'test[1]'|t(12, 'London Zoo') }}
```

Js:
```js
// ...

let TwingTranslationExtension = require('twing-translation')

// Use similar structure:
let strings = {
	en: {
		test: [
			'Hello',
			'There are %d monkeys in the %s'
		]
	},
	ru: {
		test: [
			'Привет',
			'%d обезьян в %s'
		]
	}
}

twing.addExtension(
	new TwingTranslationExtension(strings, 'ru') // Can receive promises!
)

// ...
// Use twing context.language to change language
```

Result:
```html
Привет
12 обезьян в London Zoo
```
