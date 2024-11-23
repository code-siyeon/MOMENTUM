'use strict';

const menuBtn = document.querySelector('.menu_btn');
const backBtn = document.querySelector('.menu_back_btn');
const menuContent = document.querySelector('#menu_content');
const menuOverlay = document.querySelector('#menu_overlay');
let MenuOpen = false;


menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuBtn.classList.remove('active');
    backBtn.classList.toggle('active');
    MenuOpen = !MenuOpen;
});

backBtn.addEventListener('click', () => {
    menuContent.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuBtn.classList.toggle('active');
    backBtn.classList.remove('active');
});

menuOverlay.addEventListener('click', () => {
    menuContent.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuBtn.classList.remove('active');
    backBtn.classList.remove('active');
    MenuOpen = false;
});