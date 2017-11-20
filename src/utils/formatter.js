exports.formatNumberIntoCurrency = function(number, places, thousand, decimal) {
    thousand = thousand || ",";
	decimal = decimal || ".";
	let negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand);
}

exports.formatCurrencyIntoNumber = function(s) {
	let number = s.split(',').join('');
	return Number(number);
}