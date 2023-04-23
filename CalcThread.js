Number.POINT = '.';

Math.calcPercentage = function (percentage, num) {
    return num * (percentage / 100);
}

Math.extractPercentage = function (mahornum, minornum) {
    return (minornum * 100) / mahornum;
}

Math.roundBase = function (num, rounder) {
    return Math.round(num / rounder) * rounder;
}

String.prototype.extractNumbers = function() {
    const regex = /[0-9]/g;
    return this.match(regex).join('');
}

Math.randoming = function(until = 10, add = 0) {
    let selected_num = Math.floor(Math.random() * until);
    if ((selected_num + add) > until) {
        return selected_num;
    }

    return selected_num + add;
}

Math.multipleDivision = function (num, array, minimum) {
	for (var i = 0; !num < minimum; i++) num -= array[i];
	return i + (num / Math.pow(10, num.toString().length));
}