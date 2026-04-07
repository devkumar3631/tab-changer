let first_button=document.getElementById("first");
let second_button=document.getElementById("second");
let third_button=document.getElementById("third");
let fourth_button=document.getElementById("fourth");

let first_tab=document.getElementById("first_tab");
let second_tab=document.getElementById("second_tab");
let third_tab=document.getElementById("third_tab");
let fourth_tab=document.getElementById("fourth_tab");


const buttons = [first_button, second_button, third_button, fourth_button];
const tabs = [first_tab, second_tab, third_tab, fourth_tab];

function showTab(index) {
    tabs.forEach(tab => tab.classList.add("hidden"));
    buttons.forEach(btn => btn.classList.remove("active"));

    tabs[index].classList.remove("hidden");
    buttons[index].classList.add("active");
}

first_button.addEventListener("click", () => showTab(0));
second_button.addEventListener("click", () => showTab(1));
third_button.addEventListener("click", () => showTab(2));
fourth_button.addEventListener("click", () => showTab(3));


showTab(0);