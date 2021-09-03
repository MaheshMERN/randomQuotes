let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '“The purpose of our lives is to be happy.” — Dalai Lama',
    '“Life is what happens when you’re busy making other plans.” — John Lennon',
    '“Get busy living or get busy dying.” — Stephen King',
    '“You only live once, but if you do it right, once is enough.” — Mae West',
    '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison',
];

btn.addEventListener('click',function(){
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuotes;
})