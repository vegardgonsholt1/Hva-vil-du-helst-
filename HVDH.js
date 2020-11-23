//@ts-check

const choice = [
    {
        question: "Ha en ekte 'komme ut av fengsels gratis'kort"
    },
    {
        question: "En nøkkel som åpner en hvilken som helst dør"
    },
    {
        question: "Ha at alle trafikklys du nærmer deg blir grønne"
    },
    {
        question: "Aldri trenger å stå i kø igjen",
    },
    {
        question: "Tilbringe resten av livet med en seilbåt som ditt hjem"
    },
    {
        question: "En bobil som ditt hjem"
    },
    {
        question: "Bli tvunget til å danse hver gang du hører musikk"
    },
    {
        question: "Bli tvunget til å synge med på en sang du har hørt"
    },
    {
        question: "Ha en brudekjole / smoking hver eneste dag"
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
        question: "En berømt skuespiller"
    },
    {
        question: "Kunne kontrollere brann"
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
        question: "Være helt usynlig i en dag"
    },
    {
        question: "Kunne fly i en dag"
    },
    {
        question: "Aldri kunne bruke berøringsskjerm"
    },
    {
        question: "Aldri kunne bruke tastatur og mus"
    },
    {
        question: "Få en gratis internasjonal flybillett tur-retur hvert år"
    },
    {
        question: "kunne fly innenlands når som helst gratis"
    },
    {
        question: "Gi opp dusjing/bading i en måned ",
    },
    {
        question: "Gi opp internett i en måned"
    },
    {
        question: "Gi opp å se på TV / filmer i et år "
    },
    {
        question: "Gi opp å spille spill i et år"
    },
    {
        question: "Elton John"
    },
    {
        question: "Mickael Jackson"
    },
    {
        question: "Aldri gå tom for batteristrøm på noe"
    },
    {
        question: "Har ha alltid gratis raskt Wi-Fi uansett hvor du går"
    },
    {
        question: "Gå din normale dag, men naken"
    },
    {
        question: "Sovne i et helt år"
    },
    {
        question: "Være rik og stygg"
    },
    {
        question: "Dårlig og flink"
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

    document.getElementById("textb").innerText = choice[k + 1].question;
    document.getElementById("textr").innerText = choice[k].question;

    document.getElementById("red").addEventListener("click", valg);
    document.getElementById("blue").addEventListener("click", valg);
    //k += 2;
}


window.onload = function () {
    valg();
    document.getElementById("red").addEventListener("click", valg);
    document.getElementById("blue").addEventListener("click", valg);
};
