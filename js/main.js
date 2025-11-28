const filterButtons = document.querySelectorAll('.filters button');
const allDivs = document.querySelectorAll('.flip-card, .motto-card, .logo-card');

const allPlayers = document.querySelectorAll('.flip-card');
const decorDivs = document.querySelectorAll('.motto-card, .logo-card');

const oLineDivs = document.querySelectorAll('div[data-role~="o-line"]');
const dLineDivs = document.querySelectorAll('div[data-role~="d-line"]');
const captains = document.querySelectorAll('div[data-role~="captains"]');

allPlayers.forEach(player => {

if (window.matchMedia("(hover: hover)").matches) {

    // Hover
    player.addEventListener('mouseenter', () => {

        console.log("Hover")

        for (let i = 0; i < allPlayers.length; i++) {
            allDivs[i].classList.add("otherFlipped");
        }
        player.classList.remove("otherFlipped")
        player.classList.add("flipped")
        
    });

    player.addEventListener('mouseleave', () => {

        console.log("No Hover")

        for (let i = 0; i < allPlayers.length; i++) {
            allDivs[i].classList.remove("otherFlipped");
        }
        player.classList.remove("flipped")

    });

    //   Focus
        player.addEventListener('focus', () => {

            console.log("focus")

            for (let i = 0; i < allPlayers.length; i++) {
                allDivs[i].classList.add("otherFlipped");
            }
            player.classList.remove("otherFlipped")
            player.classList.add("flipped")
            
        });

        player.addEventListener('blur', () => {

            console.log("blur")

            for (let i = 0; i < allPlayers.length; i++) {
                allDivs[i].classList.remove("otherFlipped");
            }
            player.classList.remove("flipped")

        });
    }

// Click
    player.addEventListener('click', () => {

        console.log("clicked")
        console.log(player.classList.value);

    if (player.classList.contains('flipped')) {

        console.log("clickOn")

        for (let i = 0; i < allPlayers.length; i++) {
            allDivs[i].classList.remove("otherFlipped");
        }
        player.classList.remove("flipped")
        

    }
    else {

        console.log("clickOff")

        for (let i = 0; i < allPlayers.length; i++) {
            allDivs[i].classList.add("otherFlipped");
        }
        player.classList.remove("otherFlipped")
        player.classList.add("flipped")

    }
        
    });

});

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