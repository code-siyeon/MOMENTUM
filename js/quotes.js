'use strict';

// 명언을 담고 있는 객체들의 배열
// 각각 명언(quote)과 저자(author)를 가지고 있음
const quotes = [
    {
        quote: "The course of true love never did run smooth.",
        author: "William Shakespeare",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "Life is either a daring adventure or nothing at all",
        author: "Thomas Jefferson",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Anonymous",
    },
    {
        quote: " The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote: "Stop chasing the money and start chasing the passion.",
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
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
    },
    {
        quote: "Love asks me no questions, and gives me endless support.",
        author: "William Shakespeare",
    },
    {
        quote: "Courage is being scared to death… and saddling up anyway.",
        author: "John Wayne",
    },
    {
        quote: "If you would be loved, love and be lovable.",
        author: "Benjamin Franklin",
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn",
    }
];

// 명언을 표시할 HTML 요소를 선택
const wiseSaying = document.querySelector("#quote span:first-child");
// 저자 이름을 표시할 HTML 요소를 선택
const author = document.querySelector("#quote span:last-child");


// quotes 배열에서 랜덤으로 한 객체를 선택
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 선택된 명언을 화면에 표시
wiseSaying.innerText = `"${randomQuote.quote}"`;
// 선택된 저자 이름을 화면에 표시
author.innerText = randomQuote.author;