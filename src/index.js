module.exports = function toReadable (number) {
    const numbersMap = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    };
    let result = '';
    const hundreds = Math.floor(number / 100);
    const remainder1 = number % 100;
    const dozen = Math.floor(remainder1 / 10) * 10;
    const remainder2 = remainder1 % 10;

    if (number === 0) {
        const stringWithZero = number.toString();
        result += numbersMap[stringWithZero];   
    }

    if (hundreds > 0) {
        const stringWithHundred = hundreds.toString();
        const partialResult = numbersMap[stringWithHundred];
        result += partialResult + ' hundred ';   
    }

    if (remainder1 === 10) {
        const stringWithDozenTen = remainder1.toString();
        const partialResult3 = numbersMap[stringWithDozenTen];
        result += partialResult3;
    }

    if ((dozen > 0) && (remainder1 >= 11 && remainder1 <= 19)) {
        const stringWithDozen1 = remainder1.toString();
        const partialResult0 = numbersMap[stringWithDozen1];
        result += partialResult0;
    } else if ((dozen > 0) && (remainder1 > 19)) {
        const stringWithDozen = dozen.toString();
        const partialResult1 = numbersMap[stringWithDozen];
        result += partialResult1 + " ";
    }

    if ((remainder2 > 0) && ((remainder1 > 19) || (remainder1 < 11))) {
        const stringWithUnits = remainder2.toString();
        const partialResult2 = numbersMap[stringWithUnits];
        result += partialResult2;
    }

    return(result.trim());
}