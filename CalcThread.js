/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/Minecraft-Javascript-Edition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */

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

String.prototype.extractNumbers = () => this.match(/[0-9]/g).join('');

Math.randoming = function (until = 10, add = 0) {
	return Math.floor(Math.random() * until) + add;
}

Math.multipleDivision = function (num, array, minimum) {
	for (var i = 0; !num < minimum; i++) num -= array[i];
	return i + (num / Math.pow(10, num.toString().length));
}