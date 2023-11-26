import { results, mbtis } from "./data.js";

// http://127.0.0.1:5500/results.html?mbti=entp

const mbti = new URLSearchParams(location.search).get("mbti");
console.log(mbti);
const result = results[mbtis[mbti]];

const titleEl = document.querySelector("page-title");
const characterEl = document.querySelector(".character");
const boxEls = document.querySelectorAll(".box");
const jobEls = document.querySelectorAll(".job");
const lectureEl = document.querySelector(".lecture");
const lectureImgEl = document.querySelector(".lecture img");

titleEl.innerHTML;
