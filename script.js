function above18(age) {
    return age >= 18;
}

function heyKiddo(age) {
    if (above18(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(heyKiddo(21));

function btw(basePrice, percentage) {
    return basePrice + (basePrice * (percentage / 100)); 
}

function vatCalculator(basePrice, percentage) {
    return btw(basePrice, percentage);
}

console.log(vatCalculator(2, 9));

function btw2(priceWithVAT, percentage) {
    const basePrice2 = priceWithVAT / ((percentage / 100) + 1);
    const vatAmount = priceWithVAT - basePrice2;
    return result = [basePrice2, vatAmount];
}

function vatCalculator2(priceWithVAT, percentage) {
    return btw2(priceWithVAT, percentage);
}

console.log(vatCalculator2(1210, 21));