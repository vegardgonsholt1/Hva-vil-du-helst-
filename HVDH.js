//@ts-check

const choice = [
    {
        question: "Ha ett ekte 'komme ut av fengsels gratis' kort"
    },
    {
        question: "En nøkkel som åpner alle dører"
    },
    {
        question: "Alle trafikklys du nærmer deg blir grønne"
    },
    {
        question: "Aldri trenge å stå i kø igjen",
    },
    {
        question: "Tilbringe resten av livet med en seilbåt som ditt hjem"
    },
    {
        question: "Tilbringe resten av livet med en bobil som ditt hjem"
    },
    {
        question: "Bli tvunget til å danse hver gang du hører musikk"
    },
    {
        question: "Bli tvunget til å synge med på hver sang du hører"
    },
    {
        question: "Ha på en brudekjole / smoking hver eneste dag"
    },
    {
        question: "Bruke badedrakt hver eneste dag"
    },
    {
        question: "At alle hunder prøver å angripe deg når de ser deg"
    },
    {
        question: "At alle fugler prøver å angripe deg når de ser deg"
    },
    {
        question: "Være batman"
    },
    {
        question: "Være superman"
    },
    {
        question: "Være en berømt regissør"
    },
    {
        question: "Være en berømt skuespiller"
    },
    {
        question: "Kunne kontrollere flammer"
    },
    {
        question: "Kunne kontrollere vann"
    },
    {
        question: "Ikke kunne bruke søkemotorer"
    },
    {
        question: "Ikke kunne bruke sosiale medier"
    },
    {
        question: "Være usynlig i en dag"
    },
    {
        question: "Kunne fly i en dag"
    },
    {
        question: "Aldri mer bruke berøringskjerm"
    },
    {
        question: "Aldri mer bruke tastatur og mus"
    },
    {
        question: "Få en gratis internasjonal flybillett tur-retur hvert år"
    },
    {
        question: "Kunne fly innenlands når som helst gratis"
    },
    {
        question: "Ikke dusje/bade i en måned ",
    },
    {
        question: "Ikke bruke internett i en måned"
    },
    {
        question: "Ikke kunne se på TV / filmer i et år "
    },
    {
        question: "Ikke kunne spille spill i et år"
    },
    {
        question: "Elton John"
    },
    {
        question: "Michael Jackson"
    },
    {
        question: "Aldri gå tom for batteri på noe"
    },
    {
        question: "Alltid ha gratis raskt Wi-Fi overalt"
    },
    {
        question: "Ha en normal hverdag, men naken"
    },
    {
        question: "Sove i et helt år"
    },
    {
        question: "Være rik og stygg"
    },
    {
        question: "Være fattig og fin"
    },
    {
        question: "Finne ekte kjærlighet"
    },
    {
        question: "Få 10 millioner dollar"
    },
    {
        question: "Hytte ved sjøen"
    },
    {
        question: "Hytte på fjellet"
    }
];





var howMany;
var k = Math.floor(Math.random() * choice.length);
if (k % 2 !== 0) k++;
function valg() {
    if (k == choice.length) k = 0;
    howMany = Math.floor(Math.random() * 100);
    document.getElementById("red").removeEventListener("click", valg);
    document.getElementById("blue").removeEventListener("click", valg);

    document.getElementById("textb").innerText = choice[k].question;
    document.getElementById("textr").innerText = choice[k + 1].question;

    document.getElementById("red").addEventListener("click", valg);
    document.getElementById("blue").addEventListener("click", valg);
    //k += 2;
}


window.onload = function () {
    valg();
    document.getElementById("red").addEventListener("click", valg);
    document.getElementById("blue").addEventListener("click", valg);
};

function serverStart() {
    localStorage.setItem("valg", JSON.stringify([]));
}

function serverStem(snr) {
    const strStatus = localStorage.getItem("valg");
    const status = JSON.parse(strStatus);
    const finnes = status.find(e => e.snr === snr);
    if (finnes) {
        finnes.antall += 1;
    } else {
        status.push({snr, antall:1});
    }
    const saveJSON = JSON.stringify(status);
    localStorage.setItem("valg", saveJSON);
    const idx = Math.floor (snr/2) * 2;
    return { first:status[idx], second:status[idx+1]}
}   

//const resultat = serverStem(2);
//resultat.first.antall;
//resultat.second.antall;