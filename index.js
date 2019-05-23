
let vsprintf = require('sprintf-js').vsprintf
let {TwingExtension, TwingFilter} = require('twing')

module.exports = class extends TwingExtension {
	constructor(strings = {}, defaultLanguage = 'en') {
		super();
		(async () => {this.strings = await strings})()
		this.defaultLanguage = defaultLanguage
	}

	getFilters() {
		return [
			new TwingFilter('t', (ctx, key, ...args) => {
				try {
					let language = this.defaultLanguage
					for(let i of ctx) if(i[0] == 'language') language = i[1]
					
					if(args.length) return vsprintf(eval('this.strings.' + language + '.' + key)||key, args)
					return eval('this.strings.' + language + '.' + key)||key
				} catch(e) {
					return key
				}
			}, {needs_context: true, is_safe: ['html']})
		]
	}
}