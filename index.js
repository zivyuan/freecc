const tokens = {
	'js': {
		commentStart: '//',
		commentEnd: '',
		define: {
			token: '#define'
		}
		[{
		token: '#if',
		expect: ['#elseif', '#else', '#endif']
	}]}
}

const collectDefine = function (file) {
	var defines = {}
	return defines
}
var complie = function (script, conf) {

}

const complieJavascript = function (script, conf) {

}


export const freecc = {
	complie: function (script, type) {
		return complie(script)
	},
	complieJavascript: function () {

	},
	// complieJS: complieJavascript,
	// complieCSS,
	// complieHTML,
	// compliePHP,
}
