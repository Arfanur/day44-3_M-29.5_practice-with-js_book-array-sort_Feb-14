const bigNumbers = [38, 20, 38, 1348, 3840, 329, 3803, 204384, 8340, 2, 38, 384, 94, 24, 48, 948];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);