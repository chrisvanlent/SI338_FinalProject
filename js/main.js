const filterButtons = document.querySelectorAll('.filters button');
const allDivs = document.querySelectorAll('.flip-card, .motto-card, .logo-card');

const decorDivs = document.querySelectorAll('.motto-card, .logo-card');

const oLineDivs = document.querySelectorAll('div[data-role~="o-line"]');
const dLineDivs = document.querySelectorAll('div[data-role~="d-line"]');
const captains = document.querySelectorAll('div[data-role~="captains"]');

function show_all_players() {

    console.log("In show_all_players")
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.remove("hidden");
    }
}

function hide_all_players() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.add("hidden");
    }
}


function show_o_line() {
    hide_all_players()

    for (let i = 0; i < oLineDivs.length; i++) {
        oLineDivs[i].classList.remove("hidden");
    }
}

function show_d_line() {
    hide_all_players()

    for (let i = 0; i < dLineDivs.length; i++) {
        dLineDivs[i].classList.remove("hidden");
    }
}

function show_captains() {
    hide_all_players()

    for (let i = 0; i < captains.length; i++) {
        captains[i].classList.remove("hidden");
    }
}