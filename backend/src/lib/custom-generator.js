var expressions = require('angular-expressions');

// Apply all customs functions
function apply(data) {

}
exports.apply = apply;

// *** Custom modifications of audit data for usage in word template

// Count all vuln by lcomi
// Example: {findings | countAll}
expressions.filters.countAll = function(input) {
    if(!input) return input;
    return input.length;
}


// Convert effort and priority by lcomi
// Example:  {priority | priorityStrEn}
expressions.filters.priorityStrEn = function(input) {
    if(!input) return input;
        if (input === 1) {
        return "Low"
    }
        if (input === 2) {
        return "Medium"
    }
        if (input === 3) {
        return "High"
    }
}

// Convert effort and priority in ITA by lcomi
// Example:  {priority | priorityStrIt}
expressions.filters.priorityStrIt = function(input) {
    if(!input) return input;
        if (input === 1) {
        return "Bassa"
    }
        if (input === 2) {
        return "Media"
    }
        if (input === 3) {
        return "Alta"
    }
}

// Translate Risk by lcomi
// Example:  {cvssSeverity | translateR}
expressions.filters.translateR = function(input) {
    if(!input) return input;
        if (input === "Low") {
        return "Basso"
    }
        if (input === "Medium") {
        return "Medio"
    }
        if (input === "High") {
        return "Alto"
    }
        if (input === "Critical") {
        return "Critico"
    }
}

// Convert identifier prefix to a user defined prefix: {identifier | changeID: 'PRJ-'}
expressions.filters.changeID = function (input, prefix) {
    return input.replace("IDX-", prefix);
}

// *** Custome Angular expressions filters ***
var filters = {};

// Convert input date in ITALIAN with parameter s (full,short): {input | convertDateIT: 's'}
expressions.filters.convertDateIT = function(input, s) {
    var date = new Date(input);
    if (date != "Invalid Date") {
        var monthsFull = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
        var monthsShort = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        var days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
        var day = date.getUTCDate();
        var month = date.getUTCMonth();
        var year = date.getUTCFullYear();
        if (s === "full") {
            return days[date.getUTCDay()] + " " + (day<10 ? '0'+day: day) + " " + monthsFull[month] + " " + year;
        }
        if (s === "short") {
            return (day<10 ? '0'+day: day) + "-" + monthsShort[month] + "-" + year;
        }
    }
}

exports.expressions = expressions

