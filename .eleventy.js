module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets')

	eleventyConfig.addCollection('oppskrifter', function(collection) {
		return collection.getAll().filter(function(item) {
			return 'oppskrift' in item.data
		})
	})

	eleventyConfig.addCollection('tagsList', function(collectionApi) {
		const tagsList = new Set()
		collectionApi.getAll().map(item => {
			if (item.data.tags) {
				// handle pages that don't have tags
				item.data.tags.map(tag => tagsList.add(tag))
			}
		})

		const entries = []
		for (const tag of tagsList) {
			entries.push(tag)
		}
		tagsList.clear()

		for (const tag of entries.sort((a, b) => {
			if (a < b) return -1
			else if (a > b) return 1
			else return 0
		})) {
			tagsList.add(tag)
		}
		return tagsList
	})

	eleventyConfig.addFilter('abc', function(array) {
		return array.sort((a, b) => {
			if (a.data.title < b.data.title) return -1
			else if (a.data.title > b.data.title) return 1
			else return 0
		})
	})

	eleventyConfig.addFilter('cba', function(array) {
		return array.sort((a, b) => {
			if (a.data.title > b.data.title) return -1
			else if (a.data.title < b.data.title) return 1
			else return 0
		})
	})

	eleventyConfig.addFilter('toUpper', function(string) {
		let output = string[0].toUpperCase()
	})

	return {
		dir: {
			input: 'src',
			output: 'public'
		}
	}
}
