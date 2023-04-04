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

Number.prototype.override = function (num, str) {
    let possible_decimals = this - parseInt(this);
    let new_this = parseInt(this)

    let this_toString = new_this.toString();
    while (this_toString.length < num) {
        this_toString = str + this_toString;
    }

    if (possible_decimals > 0) {
        // Have decimals

        let final_decimals = parseFloat(possible_decimals).toFixed(2);
        while (final_decimals - parseInt(final_decimals) != 0) {
            final_decimals *= 10;
        }
        return this_toString + Number.POINT + final_decimals;
    }
    return this_toString;
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