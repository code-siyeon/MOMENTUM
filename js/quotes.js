const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Life is either a daring adventure or nothing at all",
        author: "Helen Keller",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
        author: "Bruce Lee",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: " Lilly Pulitzer",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
    },
    {
        quote: "Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.",
        author: "Alexander Pope",
    },
    {
        quote: "Love asks me no questions, and gives me endless support.",
        author: "William Shakespeare",
    },
    {
        quote: "To love and win is the best thing. To love and lose, is the next best thing.",
        author: "William Thackeray",
    },
    {
        quote: "If you would be loved, love and be lovable. ",
        author: "Benjamin Franklin",
    },
    {
        quote: "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly. ",
        author: "Anonymous",
    }
];


function paintQuote() {
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    if (savedUsername !== null) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote.innerText = `"${randomQuote.quote}"`;
        author.innerText = randomQuote.author;
    } else {
        quote.innerText = "";
        author.innerText = "";
    }
}