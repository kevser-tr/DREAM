let standaardPos = [0, 50, 100, 150]
let alterPos = [-50, 0, 50, 150]
let test = document.getElementsByName("bok");
test.forEach(element =>
    element.addEventListener("click", function () {
        switch (element.id) {

            case "top1":
                fix(0);
                document.getElementById("h1Text").innerHTML = "1  - Nanotechnologische gebreide stof";
                document.getElementById("paraText").innerHTML = "Biedt het een vredig slaapcomfort met zijn zachte stofstructuur die geschikt is voor alle seizoenen.";
                break;

            case "top2":
                fix(1);
                document.getElementById("h1Text").innerHTML = "2 - Hypersoft Spons";
                document.getElementById("paraText").innerHTML = "HyperSoft-spons is een speciaal soort spons dat zachter en zeer flexibel is dan veren-spons. Het helpt om gemakkelijk de vorm van het lichaam aan te nemen.";
                break;

            case "top3":
                fix(2);
                document.getElementById("h1Text").innerHTML = "3 - Magnetische zandmix speciale spons";
                document.getElementById("paraText").innerHTML = "Het magnetische zwarte zand, wordt door een speciale techniek in de spons gemengd. Deze soort spons wordt gebruikt in het comfortkussen van de Magnasand Therapy-matras, waardoor een magnetisch veld ontstaat dat stress in het lichaam helpt verminderen. ";
                break;

            case "top4":
                fix(3);
                document.getElementById("h1Text").innerHTML = "4 - Pocket veersysteem";
                document.getElementById("paraText").innerHTML = "De veren hebben individuele compartiment. Op deze manier helpen de  veren om de lichaamsdruk gelijkmatig over de matras te verdelen.";
                break;
        }
    })
)

fix(0);

function fix(j) {

    for (let i = 0; i < j; i++) {
        test[i].style.transform = "translateY(" + alterPos[i] + "px)";
    }
    for (let i = 3; i >= j; i--) {
        test[i].style.transform = "translateY(" + standaardPos[i] + "px)";
    }

}