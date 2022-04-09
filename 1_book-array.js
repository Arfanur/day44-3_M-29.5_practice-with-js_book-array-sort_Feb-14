const books = [
    'JavaScript: The Good Parts',
    'JAVASCRIPT & JQUERY',
    'Eloquent JavaScript',
    'A SMARTER WAY TO LEARN JAVASCRIPT',
    'SCOPE & CLOSURES',
    'JavaScript from Beginner to Professional'
];
const searching = 'Javascript';
const output = [];
for (const book of books) {
    if (book.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(book);
    }
}
// console.log(output);

for (const book of books) {
    if (book.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(book);
    }
}
// console.log(output);

for (const book of books) {
    if (book.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(book);
    }
}
// console.log(output);