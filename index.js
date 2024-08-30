const postcss = require("postcss");

module.exports = postcss.plugin("postcss-transform-mini", function () {
	const imgRgx = /\simg/g;
	const divRgx = /\sdiv/g;
	const spanRgx = /\sspan/g;

	return function (css) {
		css.walkRules(function (rule) {
			const selectors = rule.selectors;
			selectors.forEach((item) => {
				if (imgRgx.test(item)) {
					const currSelectors = item.replace(imgRgx, " image");
					rule.selectors = [currSelectors];
				}

				if (divRgx.test(item)) {
					const currSelectors = item.replace(divRgx, " view");
					rule.selectors = [currSelectors];
				}

				if (spanRgx.test(item)) {
					const currSelectors = item.replace(spanRgx, " text");
					rule.selectors = [currSelectors];
				}
			});
		});
	};
});
